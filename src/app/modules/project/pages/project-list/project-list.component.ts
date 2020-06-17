import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../../core/services/project.service';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {ProjectCreateComponent} from '../../modals/project-create/project-create.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects$: Observable<any>;
  displayedColumns: string[] = [
    'name',
    'description',
    'duration',
    'type',
    'status',
    'assignedTo',
    'createdAt',
    'actions',
  ];

  constructor(
    private projectService: ProjectService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  createUserDialog(_id: string = null) {
    const dialogRef = this.dialog.open(ProjectCreateComponent, {
      width: '400px',
      data: { _id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getProjects();
      }
    });
  }

  getProjects() {
    this.projects$ = this.projectService.getProjects();
  }

  deleteUser(_id: string) {
    this.projectService.deleteProject(_id).subscribe(() => this.getProjects());
  }
}
