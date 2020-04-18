import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Authentification } from 'src/app/models/authentification';
import { LoginService } from 'src/app/services/login.service';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  authentification: Authentification = new Authentification();
  constructor(private formBuilder: FormBuilder, private authService: AuthService, public router: Router,
    private loginService: LoginService, private inscriptionService: InscriptionService) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  ngOnInit() {

  }

  onSubmit(): void {
    this.authentification.email = this.loginForm.value.email;
    this.authentification.password = this.loginForm.value.password;
    this.authService.login(this.authentification).subscribe(value => {
      if (value.status === 200) {
        const redirectUrl = '/home';
        sessionStorage.setItem('type', value.body.type);
        sessionStorage.setItem('user', value.body._id);
        sessionStorage.setItem('logged', 'true');
        this.authService.isLogged = true;
        this.router.navigate([redirectUrl]);
        this.authService.getValue();
      } else if (value.status === '403') {
        //todo afficher erreur
        const redirectUrl = '/login';
        this.router.navigate([redirectUrl]);
      }
    })
  }
}
