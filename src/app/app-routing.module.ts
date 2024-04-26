import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TablaComponent } from './tabla/tabla.component';

const routes: Routes = [
  { path: 'calculadora', component: CalculatorComponent },
  { path: 'tabla', component: TablaComponent },
  { path: '**', redirectTo: 'calculadora' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
