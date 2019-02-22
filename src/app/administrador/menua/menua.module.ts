import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuaRoutingModule } from './menua-routing.module';
import { MenuaComponent } from './menua.component';

@NgModule({
  declarations: [MenuaComponent],
  imports: [
    CommonModule,
    MenuaRoutingModule
  ]
})
export class MenuaModule { }
