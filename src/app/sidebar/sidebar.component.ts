import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  historial: string = ''; // Variable para almacenar el historial

  guardarHistorial() {
    try {
      let res = eval(this.historial); // Calcular el resultado
      this.historial = res.toString(); // Actualizar el historial con el resultado
      localStorage.setItem('historial', this.historial); // Guardar el historial en localStorage
    } catch {
      this.historial = "ERROR"; // Mostrar "ERROR" si hay un error en la evaluación
    }

    this.mostrarHistorial(); // Llamar a la función para mostrar el historial
  }

  mostrarHistorial() {
    if (typeof (Storage) !== "undefined") {
      const historialGuardado = localStorage.getItem('historial');
      if (historialGuardado) {
        this.historial = historialGuardado; // Actualizar el historial con el valor almacenado en localStorage
      }
    }
  }

  limpiarHistorial() {
    // Vaciar el historial
    this.historial = '';
    // Borrar el historial de localStorage
    localStorage.removeItem('historial');
  }
}
