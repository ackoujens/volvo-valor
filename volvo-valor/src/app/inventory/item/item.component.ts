import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatSnackBar } from '@angular/material';
import { SimpleDialogComponent } from '../../simpledialog/simpledialog.component';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(public itemService: ItemService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.onReset();
  }

  onSubmit(itemForm: NgForm) {
    if (itemForm.value.id == null) {
      try {
        this.itemService.createItem(itemForm);
        this.snackBar.open('Item created', null, { duration: 4000 });
      } catch (error) {
        this.dialog.open(SimpleDialogComponent, {
          data: {
            body: error
          }
        });
        this.snackBar.open('Item creation failed', null, { duration: 4000 });
      }
    } else {
      this.snackBar.open('Updating Item', null, { duration: 2000 });
      this.itemService.updateItem(itemForm);
    }
    this.onReset(itemForm);

    (<any>window).ga('send', 'event', {
      eventCategory: 'Inventory',
      eventLabel: 'Item',
      eventAction: 'Submit',
      eventValue: 10
    });
  }

  onReset(itemForm?: NgForm) {
    if (itemForm != null) {
      itemForm.reset();
    }
  }
}
