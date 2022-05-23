import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  addressForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],   
    record: [false]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {     
    if (this.addressForm.valid) { 
      alert('Usuario logueado con éxito')
      if (this.addressForm.controls.record.value) {
        localStorage.setItem('user', JSON.stringify(this.addressForm.value));      
      }
    }
  }
}
