import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../../../core/services/project.service';
import {Observable} from 'rxjs';
import {UserService} from '../../../../core/services/user.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss'],
})
export class ProjectCreateComponent implements OnInit {
  form: FormGroup;
  action: string = 'Crear';
  projectId: string;
  users$: Observable<any>;

  constructor(
    public dialogRef: MatDialogRef<ProjectCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private projectService: ProjectService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getUsers();
    this.projectId = this.data._id;
    if (this.projectId) {
      this.getProject(this.projectId);
      this.action = 'Actualizar';
    }
  }

  initializeForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: '',
      duration: ['', Validators.required],
      type: ['', Validators.required],
      assignedTo: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const data = { id: this.projectId, ...this.form.value };
    if (this.data?._id) {
      this.updateProject(data);
    } else {
      this.createProject(data);
    }
  }

  getProject(id: string) {
    this.projectService
      .getProject(id)
      .subscribe(project => this.form.patchValue(project));
  }

  getUsers() {
    this.users$ = this.userService.getUsers();
  }

  createProject(project) {
    this.projectService
      .createProject(project)
      .subscribe(() => this.dialogRef.close(true));
  }

  updateProject(project) {
    this.projectService
      .updateProject(project)
      .subscribe(() => this.dialogRef.close(true));
  }
}
