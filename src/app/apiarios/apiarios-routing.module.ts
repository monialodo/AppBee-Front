import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiarioComponent } from './apiarios/apiarios.component';

const routes: Routes = [
  { path: '', component: ApiarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiariosRoutingModule { }
