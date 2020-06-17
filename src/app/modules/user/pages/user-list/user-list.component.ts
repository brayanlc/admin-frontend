import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../../core/services/user.service';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {UserCreateComponent} from '../../modals/user-create/user-create.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<any>;
  displayedColumns: string[] = ['name', 'email', 'rol', 'actions'];

  constructor(private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers();
  }

  createUserDialog(_id: string = null): void {
    const dialogRef = this.dialog.open(UserCreateComponent, {
      width: '400px',
      data: { _id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getUsers();
      }
    });
  }

  getUsers() {
    this.users$ = this.userService.getUsers();
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => this.getUsers());
  }
}
