import {Directive, OnInit, TemplateRef, ViewContainerRef,} from '@angular/core';

@Directive({
  selector: '[appHasPermission]',
})
export class HasPermissionDirective implements OnInit {
  constructor(private vcr: ViewContainerRef, private tpl: TemplateRef<any>) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.vcr.clear();
    if (user.rol === 'Administrador') {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
