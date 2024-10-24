import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!:FormGroup;

  constructor(private fb:FormBuilder,private router:Router){}

  ngOnInit(){
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm = this.fb.group({
      username:[''],
      password:[''],
    })
  }

  submit(){
    const data = this.loginForm.value
    if(data.username == 'Sagar@gmail.com' && data.password == 'Admin@123'){
      this.router.navigate(['/user']);
    }
  }
}
