import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlistaContactesComponent } from './llista-contactes/llista-contactes.component';
import { DetallsContacteComponent } from './detalls-contacte/detalls-contacte.component';

const routes: Routes = [
  { path: 'contactes', component: LlistaContactesComponent },
  { path: 'detalls/:id', component: DetallsContacteComponent },
  { path: '', redirectTo: '/contactes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
