import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  constructor(private router: Router, private authService: AuthService) { }

  public sidebarItems = [

    { label: 'Calculadora', icon: 'calculate', url:'./calculator'},
    { label: 'Crear Tabla', icon: 'table_rows', url:'./tabla' },
    { label: 'Tareas', icon: 'check_box', url:'./tareas' },
    { label: 'Buscador de banderas', icon: 'flag', url:'./flags'},

  ]

  get user():User | undefined {
    return this.authService.currentUser;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }
}
