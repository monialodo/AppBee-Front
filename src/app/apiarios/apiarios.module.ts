import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { ApiariosRoutingModule } from './apiarios-routing.module';
import { ApiarioComponent } from './apiarios/apiarios.component';



@NgModule({
  declarations: [
    ApiarioComponent
  ],
  imports: [
    CommonModule,
    ApiariosRoutingModule,
    AppMaterialModule,
    SharedModule

  ]
})
export class ApiariosModule { }
