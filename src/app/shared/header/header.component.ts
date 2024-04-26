import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router){}

  goToCalculadora(){
    this.router.navigate(['/calculadora']);
  }

  goToTablas(){
    this.router.navigate(['/tabla']);
  }
}
