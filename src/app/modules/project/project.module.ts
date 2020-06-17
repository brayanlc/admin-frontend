import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjectRoutingModule} from './project-routing.module';
import {ProjectListComponent} from './pages/project-list/project-list.component';
import {MatTableModule} from '@angular/material/table';
import {ProjectCreateComponent} from './modals/project-create/project-create.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [ProjectListComponent, ProjectCreateComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class ProjectModule {}
