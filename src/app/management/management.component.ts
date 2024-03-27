import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {

  formulario: FormGroup;

  formBuilder = inject(FormBuilder);

  constructor(private productsService: ProductsService) {
    this.formulario = this.formBuilder.group({
      name: [],
      price: [],
      description: [],
      image: [],
      stars: [] 
    })
  }
 
  lili() {
    console.log("lilili")
  }

  async onSubmit() {
    console.log("hey");
    const response = await this.productsService.addItem(this.formulario.value);
    console.log("Producto añadido" + this.formulario.value);
    console.log(this.productsService.products);
  }
}
