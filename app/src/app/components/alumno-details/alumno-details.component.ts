import { Component, Input, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/models/alumno.model';
@Component({
  selector: 'app-alumno-details',
  templateUrl: './alumno-details.component.html',
  styleUrls: ['./alumno-details.component.css']
})

export class AlumnoDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentAlumno: Alumno = {
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    matricula: 0,
    carrera: ''
  };
  
  message = '';
  constructor(
    private alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getAlumno(this.route.snapshot.params["alumno_id"]);
    }
  }
  getAlumno(alumno_id: string): void {
    this.alumnoService.get(alumno_id)
      .subscribe({
        next: (data) => {
          this.currentAlumno = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  
  updateAlumno(): void {
    this.message = '';
    this.alumnoService.update(this.currentAlumno.alumno_id, this.currentAlumno)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This student was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteAlumno(): void {
    this.alumnoService.delete(this.currentAlumno.alumno_id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/alumnos']);
        },
        error: (e) => console.error(e)
      });
  }
}