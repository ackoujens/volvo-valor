import { Component, OnInit } from '@angular/core';
import { ItemService } from './shared/item.service';

@Component({
  selector:     'app-inventory',
  templateUrl:  './inventory.component.html',
  styleUrls:   ['./inventory.component.scss'],
  providers:   [ItemService]
})
export class InventoryComponent {
  constructor(private itemService: ItemService) {}
}
