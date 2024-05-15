import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  constructor(private router: Router) { }

  public sidebarItems = [

    { label: 'Calculadora', icon: 'calculate', url:'./calculator'},
    { label: 'Crear Tabla', icon: 'table_rows', url:'./tabla' },
    { label: 'Tareas', icon: 'check_box', url:'./tareas' },
    { label: 'Buscador de banderas', icon: 'flag', url:'./flags'},

  ]

  logout() {
    this.router.navigate(['./auth/pages/login']);
  }
}
