import { Component } from '@angular/core';
import { Item } from '../shared/item.model';
import { ItemService } from '../shared/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  displayedColumns: string[] = ['id', 'barcode', 'title', 'price', 'shippingCost', 'importDuties', 'controls'];

  constructor(public itemService: ItemService) {}

  onEdit(item: Item) {
    this.itemService.selectedItem = item;
  }

  onDelete(item: Item) {
    // TODO: Convert to Material Dialog
    if (confirm('Are you sure to delete this record ?') === true) {
      // Delete item
      this.itemService.deleteItem(item.id);
    }
  }

}
