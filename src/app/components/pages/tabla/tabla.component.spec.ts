import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TablaComponent } from './tabla.component';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an array of personas', () => {
    expect(component.personas).toEqual([
      { nombre: 'Ana', edad: 20 },
      { nombre: 'Pepe', edad: 18 },
      { nombre: 'José', edad: 27 },
      { nombre: 'María', edad: 25 },
      { nombre: 'Pedro', edad: 30 }
    ]);
  });

  it('should set personaEditando to a persona when editar is called', () => {
    const persona = component.personas[0];
    component.editar(persona);
    expect(component.personaEditando).toBe(persona);
  });

  it('should set personaEditando to null when guardarEdicion is called', () => {
    component.personaEditando = component.personas[0];
    component.guardarEdicion();
    expect(component.personaEditando).toBeNull();
  });
});
