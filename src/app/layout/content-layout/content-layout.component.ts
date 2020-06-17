import {Component, OnInit} from '@angular/core';
import {MenuModel} from '../../core/models/menu';
import {menus} from '../../core/menu';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit {
  menus: MenuModel[] = menus;

  constructor() {}

  ngOnInit(): void {}
}
