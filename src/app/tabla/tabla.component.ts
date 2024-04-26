import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  personas: Persona[] = [
    { nombre: 'Ana', edad: 20 },
    { nombre: 'Pepe', edad: 18 },
    { nombre: 'José', edad: 27 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 30 }
  ];

  personaEditando: Persona | null = null;

  editar(persona: Persona) {
    this.personaEditando = persona;
  }

  guardarEdicion() {
    this.personaEditando = null;
  }
}
