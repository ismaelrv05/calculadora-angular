import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CalculatorRoutingModule } from './calculator-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AddTaskComponent } from './pages/add-tasks/add-tasks.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { SidebarComponent } from '../shared/pages/sidebar/sidebar.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { TareasComponent } from './pages/tareas/tareas.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FlagsComponent } from './pages/flags/flags.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    SidebarComponent,
    HistorialComponent,
    TablaComponent,
    TareasComponent,
    AddTaskComponent,
    LayoutPageComponent,
    FlagsComponent,

  ],
  imports: [
    CommonModule,
    CalculatorRoutingModule,
    FormsModule,
    MaterialModule,
    SharedModule
  ]
})
export class CalculatorModule { }
