import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HistorialComponent } from './historial.component';

describe('HistorialComponent', () => {
  let component: HistorialComponent;
  let fixture: ComponentFixture<HistorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistorialComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty historial by default', () => {
    expect(component.historial).toEqual([]);
  });

  it('should display the historial when mostrarHistorial is true', () => {
    component.mostrarHistorial = true;
    fixture.detectChanges();
    const historialElement = fixture.nativeElement.querySelector('.historial');
    expect(historialElement).not.toBeNull();
  });

  it('should not display the historial when mostrarHistorial is false', () => {
    component.mostrarHistorial = false;
    fixture.detectChanges();
    const historialElement = fixture.nativeElement.querySelector('.historial');
    expect(historialElement).toBeNull();
  });

  it('should toggle mostrarHistorial when mostrarOcultarHistorial is called', () => {
    component.mostrarHistorial = false;
    component.mostrarOcultarHistorial();
    expect(component.mostrarHistorial).toBe(true);
    component.mostrarOcultarHistorial();
    expect(component.mostrarHistorial).toBe(false);
  });

  it('should emit limpiarHistorial event when limpiar is called', () => {
    spyOn(component.limpiarHistorial, 'emit');
    component.limpiar();
    expect(component.limpiarHistorial.emit).toHaveBeenCalledTimes(1);
  });
});
