import { Product } from "../product.interface";
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() item: Product = {id: 0, name:'', price: 0, description: '', image: '', stars: 0}
}
