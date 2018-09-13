import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { storage } from 'firebase';
import { Observable } from 'rxjs';
import { filter, finalize, switchMap, tap } from 'rxjs/operators';

/* Will handle the the actual file upload task.
- Calling storage.upload(path, file) creates a task that will start the upload immediately, no need to subscribe.
- You know an upload is complete when bytesTransferred equal totalBytes.
- You monitor progress by subscribing to percentageChanges or snapshotChanges on the task.
*/

@Injectable({
  providedIn: 'root',
})
export class FileService {

  // Main task
  // Gives access to observable data
  // Allows pause, cancel, resume upload
  task: AngularFireUploadTask;

  // Progress monitoring in %
  percentage: Observable<number>;

  // Even more data can be obtained from the snapshot
  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  constructor(private angularFireStorage: AngularFireStorage,
              private firestore:          AngularFirestore) { }


  startUpload(event: FileList) {
    // First file of filelist
    const file = event.item(0);

    // Client-side validation example
    // (only upload image files)
    // TODO: Move to image/imagefile service?
    /*
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }*/

    // Storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

    // Optional metadata
    // TODO: Add metadata as argument
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // Storage reference made from path
    const ref = this.angularFireStorage.ref(path);

    // Main task
    this.task = ref.put(file, {customMetadata});

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    // this.snapshot = this.task.snapshotChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          // FIXME: Collection shouldn't be updated but the path should be passed on to be stored as string/reference
          this.firestore.collection('photos').add( { path, size: snap.totalBytes });
        }
      })
    );

    // TODO: Test which one of these is actually needed
    // The file's download URL
    this.downloadURL = this.task.snapshotChanges().pipe(
      filter(snap => snap.state === storage.TaskState.SUCCESS),
      switchMap(() => ref.getDownloadURL())
    );

    // The file's download URL
    this.snapshot.pipe(
      finalize(() => this.downloadURL = this.angularFireStorage.ref(path).getDownloadURL())).subscribe();
  }

  // TODO: What data gets transported in a snapshot and what additional methods can we create from this?
  getSnapshot() {
    return this.snapshot;
  }

  // TODO: How to set a observable return type
  getProgress() {
    return this.percentage;
  }

  getDownloadURL() {
    return this.downloadURL;
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

}
