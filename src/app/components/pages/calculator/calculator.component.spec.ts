import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CalculatorComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial value of 0', () => {
    expect(component.pantalla).toBe('0');
  });

  it('should add a number to the display', () => {
    component.agregarNumero(5);
    expect(component.pantalla).toBe('5');
  });

  it('should append a number to the display if it is not 0 or ERROR', () => {
    component.pantalla = '5';
    component.agregarNumero(3);
    expect(component.pantalla).toBe('53');
  });

  it('should replace the display with a new number if it is 0 or ERROR', () => {
    component.pantalla = '0';
    component.agregarNumero(5);
    expect(component.pantalla).toBe('5');
  });

  it('should add an operator to the display', () => {
    component.pantalla = '5';
    component.agregarOperador('+');
    expect(component.pantalla).toBe('5+');
  });

  it('should not add an operator to the display if the last character is an operator', () => {
    component.pantalla = '5+';
    component.agregarOperador('+');
    expect(component.pantalla).toBe('5+');
  });

  it('should add a point to the display', () => {
    component.pantalla = '5';
    component.agregarPunto();
    expect(component.pantalla).toBe('5.');
  });

  it('should not add a point to the display if it already contains one', () => {
    component.pantalla = '5.';
    component.agregarPunto();
    expect(component.pantalla).toBe('5.');
  });

  it('should clear the display', () => {
    component.pantalla = '5+3';
    component.borrarPantalla();
    expect(component.pantalla).toBe('0');
  });

  it('should delete the last character of the display', () => {
    component.pantalla = '5+3';
    component.borrarUltimoCaracter();
    expect(component.pantalla).toBe('5+');
  });

  it('should calculate the result of the expression', () => {
    component.pantalla = '5+3';
    component.calcularResultado();
    expect(component.pantalla).toBe('8');
  });

  it('should display an error message if the expression is invalid', () => {
    component.pantalla = '5+abc';
    component.calcularResultado();
    expect(component.pantalla).toBe('ERROR');
  });

  it('should clear the history', () => {
    component.historial = ['5+3', '2*4'];
    component.limpiar();
    expect(component.historial).toEqual(['']);
  });
});
