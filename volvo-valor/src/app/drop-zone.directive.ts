/*
Dropzone = DIV that listens for "drop" event
emots the dropped FileList off to AngularFire todo uploading magic

Also listens to dragover and dragleave to emit custom "hovered" event used to toggle css class
*/

import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {

  // Create custom events
  @Output() dropped =  new EventEmitter<FileList>();
  @Output() hovered =  new EventEmitter<boolean>();

  constructor() { }

  // Listen for browsers "drop" event
  @HostListener('drop', ['$event'])
  onDrop($event) {
    // prevent default behavior of browser trying to open a new tab
    $event.preventDefault();
    // extract file list and set "hovered" event to false
    this.dropped.emit($event.dataTransfer.files);
    this.hovered.emit(false);
  }

  // Used for toggling css classes
  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
