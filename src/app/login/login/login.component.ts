import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, public router: Router) {
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
    // Si identifiants good alors : 
    this.authService.login().subscribe(() => {
      const redirectUrl = '/home';
      this.router.navigate([redirectUrl]);
      this.authService.getValue();
    })
    sessionStorage.setItem('type', '0');
    console.log(sessionStorage.getItem('type'));
    // Dans la réponse du back, enregistrer le type d'user dans le sessionStorage
  }
}
