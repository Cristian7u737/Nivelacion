import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { AlumnoDetailsComponent } from './components/alumno-details/alumno-details.component';
import { AddAlumnoComponent } from './components/add-alumno/add-alumno.component';
const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: 'alumnos', component: AlumnosListComponent },
  { path: 'alumnos/:id', component: AlumnoDetailsComponent },
  { path: 'add', component: AddAlumnoComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }