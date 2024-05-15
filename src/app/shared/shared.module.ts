import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NgModule } from '@angular/core';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { SearchBoxComponent } from './pages/search-box/search-box.component';




@NgModule({
  declarations: [
    Error404PageComponent,
    SearchBoxComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
  ],
  exports:[
    SearchBoxComponent,

  ]
})
export class SharedModule { }
