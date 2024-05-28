import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { FlagsComponent } from './pages/flags/flags.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'calculadora', component: CalculatorComponent },
      { path: 'tabla', component: TablaComponent },
      { path: 'tareas', component: TareasComponent },
      { path: 'flags', component: FlagsComponent},
      { path: ':id', component: CalculatorComponent },
      { path: '**', redirectTo: 'calculadora' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatorRoutingModule { }
