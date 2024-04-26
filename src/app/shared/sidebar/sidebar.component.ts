import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() historial: string[] = ['']; // Variable para almacenar el historial
  mostrarHistorial: boolean = false; // Variable para mostrar/ocultar el historial

  mostrarOcultarHistorial() {
    this.mostrarHistorial = !this.mostrarHistorial;
  }

  limpiarHistorial() {
    // Vaciar el historial
    this.historial = [''];
  }
}
