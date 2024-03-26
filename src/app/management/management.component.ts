import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {

  formulario: FormGroup;

  formBuilder = inject(FormBuilder);

  constructor() {
    this.formulario = this.formBuilder.group({
      username: [],
      email: [],
      password: []
    })
  }

    async onSubmit() {
      console.log("submitting")
    }
}
