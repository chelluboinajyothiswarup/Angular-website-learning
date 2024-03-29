import { Component } from '@angular/core';
import { LoginForm } from 'src/app/type/Auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService) {
    
  }
  email: string='';
  form:LoginForm={
    email:'',
    password:''
  }
  submit(){
    this.authService.login(this.form);
  }
  isLoading(){
    return this.authService.isLoading;
  }

}
