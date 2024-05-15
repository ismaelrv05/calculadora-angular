import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
  @Input() historial: string[] = [];
  @Output() limpiarHistorial = new EventEmitter<void>();

  mostrarHistorial: boolean = false;

  mostrarOcultarHistorial() {
    this.mostrarHistorial = !this.mostrarHistorial;
  }

  limpiar() {
    this.limpiarHistorial.emit();
  }
}
