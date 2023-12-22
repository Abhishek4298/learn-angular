import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formData = {
    name: 'Abhishek'
  };
  onSubmit() {
    alert(JSON.stringify(this.formData));
  }
}
