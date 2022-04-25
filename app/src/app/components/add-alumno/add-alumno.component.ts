import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})

export class AddAlumnoComponent implements OnInit {
  alumno: Alumno = {
    nombre: '',
    apellido_p: '',
    apellido_m: '',
    matricula: 0,
    carrera: ''

  };
  submitted = false;
  constructor(private alumnoService: AlumnoService) { }
  ngOnInit(): void {
  }
  saveTutorial(): void {
    const data = {
      nombre: this.alumno.nombre,
      apellido_p: this.alumno.apellido_p,
      apellido_m: this.alumno.apellido_m,
      matricula: this.alumno.matricula,
      carrera: this.alumno.carrera
    };
    this.alumnoService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }
  newAlumno(): void {
    this.submitted = false;
    this.alumno = {
      nombre: this.alumno.nombre,
      apellido_p: this.alumno.apellido_p,
      apellido_m: this.alumno.apellido_m,
      matricula: this.alumno.matricula,
      carrera: this.alumno.carrera
    };
  }
}