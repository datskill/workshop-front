import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(private formBuilder: FormBuilder, ) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    //TODO APPEL BACK 
    console.log(sessionStorage.getItem('type'));
    // Dans la réponse du back, enregistrer le type d'user dans le sessionStorage
  }
}
