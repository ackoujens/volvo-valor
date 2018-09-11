import { Component } from '@angular/core';
import { FileService } from './../services/file.service';

/* Will handle the the actual file upload task.
- Calling storage.upload(path, file) creates a task that will start the upload immediately, no need to subscribe.
- You know an upload is complete when bytesTransferred equal totalBytes.
- You monitor progress by subscribing to percentageChanges or snapshotChanges on the task.
*/

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(public fileService: FileService) { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  public onUpload(event: FileList): void {
    this.fileService.startUpload(event);
  }

}
