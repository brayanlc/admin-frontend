import {Component, Input, OnInit} from '@angular/core';
import {MenuModel} from "../../core/models/menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() menus: MenuModel[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear()
    this.router.navigateByUrl('/auth/login')
  }
}
