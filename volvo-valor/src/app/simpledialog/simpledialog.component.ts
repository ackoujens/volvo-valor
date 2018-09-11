import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  body: string;
}

@Component({
  selector: 'app-simpledialog',
  templateUrl: './simpledialog.component.html',
  styleUrls: ['./simpledialog.component.scss']
})
export class SimpleDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
