import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../products/product.interface'; 
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  // productForm: FormGroup;

  // constructor(private http: HttpClient, private fb: FormBuilder) {
  //   this.productForm = this.fb.group({
  //     name: ['', Validators.required],
  //     price: ['', [Validators.required, Validators.min(0)]], 
  //     description: ['']
  //   });
  // }

  // onSubmit(): void {
  //   if (this.productForm.valid) {
  //     const formData: Product = this.productForm.value as Product;
  //     this.http.post('https://my-json-server.typicode.com/franlindebl/shopeame-api-v2/products', formData)
  //       .subscribe(response => {
  //         console.log('Producto creado exitosamente', response);
  //         this.productForm.reset();
  //       }, error => {
  //         console.error('Error al crear el producto', error);
  //       });
  //   }
  // }
}
