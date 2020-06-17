import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../../core/services/login.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const credentials = this.form.value;
    this.loginService.login(credentials).subscribe(
      ({ user, token }) => {
        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigateByUrl('/projects');
        } else {
        }
      },
      () => this.openSnackBarErrorLogin(),
    );
  }

  openSnackBarErrorLogin() {
    this.snackBar.open('El usuarios  o la contraseña son incorrectos', 'Ok', {
      duration: 3000,
    });
  }
}
