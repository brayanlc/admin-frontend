import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserService} from '../../../../core/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
  action: string = 'Crear';
  form: FormGroup;
  userId: string;

  constructor(
    public dialogRef: MatDialogRef<UserCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.userId = this.data?._id;
    this.initializeForm();
    if (this.userId) {
      this.getUser(this.userId);
      this.action = 'Actualizar';
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.data?._id) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  getUser(id: string) {
    this.userService.getUser(id).subscribe(user => this.form.patchValue(user));
  }

  createUser() {
    const data = this.form.value;
    this.userService
      .createUser(data)
      .subscribe(() => this.dialogRef.close(true));
  }

  updateUser() {
    const data = { id: this.userId, ...this.form.value };
    this.userService
      .updateUser(data)
      .subscribe(() => this.dialogRef.close(true));
  }

  initializeForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['Desarrollador', Validators.required],
    });
  }
}
