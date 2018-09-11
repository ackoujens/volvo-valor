import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

import { AuthService } from '../../core/auth.service';
import { PostService } from '../post.service';
import { storage } from 'firebase';
import { filter, switchMap, tap } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {
  content: string;
  image: string;
  title: string;

  saving = 'Create Post';

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  snapshot: Observable<any>;
  task: AngularFireUploadTask;

  constructor(
    private auth: AuthService,
    private postService: PostService,
    private angularFireStorage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  ngOnInit() {}

  createPost() {
    const postData = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image || null,
      published: new Date(),
      title: this.title
    };
    this.postService.create(postData);
    this.title = '';
    this.content = '';
    // HOW TO FUCKING SUBSCRIBE I DUN GET IT
    this.image = '';

    this.saving = 'Post Created!';
    setTimeout(() => (this.saving = 'Create Post'), 3000);
  }

  uploadImage(event) {
    const file = event.target.files[0];
    const path = `posts/${file.name}`;
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files');
    } else {
      // const task = this.storage.upload(path, file);
      const ref = this.angularFireStorage.ref(path);
      this.task = ref.put(file);

      // this.snapshot   = this.task.snapshotChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          // this.db.collection('photos').add( { path, size: snap.totalBytes });
          this.image = path;
        }
      })
    );

      // FIXME:this.downloadURL = task.downloadURL();
      /*
      this.downloadURL = this.task.snapshotChanges().pipe(
        filter(snap => snap.state === storage.TaskState.SUCCESS),
        switchMap(() => ref.getDownloadURL())
      );
      */

      this.uploadPercent = this.task.percentageChanges();
      console.log('Image Uploaded!');
      console.log(ref.getDownloadURL());
      // this.downloadURL.subscribe(url => (this.image = url));

      // The file's download URL
    this.snapshot.pipe(
      finalize(() => this.downloadURL = this.angularFireStorage.ref(path).getDownloadURL())).subscribe();
    }
  }
}
