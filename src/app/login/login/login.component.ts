import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Authentification } from 'src/app/models/authentification';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  authentification: Authentification = new Authentification();
  constructor(private formBuilder: FormBuilder, private authService: AuthService, public router: Router,
    private loginService: LoginService) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.authentification.email = this.loginForm.value.email;
    this.authentification.password = this.loginForm.value.password;
    this.loginService.postData(this.authentification)
    this.authService.login().subscribe(() => {
      const redirectUrl = '/home';
      this.router.navigate([redirectUrl]);
      this.authService.getValue();
    })
    sessionStorage.clear();
    sessionStorage.setItem('type', '0');
    console.log(sessionStorage.getItem('type'));
    // Dans la réponse du back, enregistrer le type d'user dans le sessionStorage
  }
}
