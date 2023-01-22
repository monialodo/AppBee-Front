import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'apiarios', pathMatch: 'full' },
  {path: 'apiarios', loadChildren: () => import('./apiarios/apiarios.module').then(m => m.ApiariosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
