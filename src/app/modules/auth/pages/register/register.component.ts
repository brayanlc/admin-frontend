import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../../../core/services/login.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
      password: ['', Validators.required],
      name: ['', Validators.required],
      rol: 'Desarrollador',
    });
  }

  toRegister() {
    const data = this.form.value;
    this.loginService.toRegister(data).subscribe(
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
    this.snackBar.open('El usuarios  usuario ya existe', 'Ok', {
      duration: 3000,
    });
  }
}
