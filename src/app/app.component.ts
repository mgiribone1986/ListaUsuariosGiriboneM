import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clase-04-no-standalone';

  hasError = true;

  isDisabled = false;

  students = ['Marcos', 'Rogelio', 'Nanca', 'Loperfila'];

  //example = [{ nombre: 'Marcos', aprobado: true }];/*aca modificar color meter un array de los aprobados */

  example = [
    { nombre: 'Marcos', aprobado: true, nota: 7 },
    { nombre: 'Rogelio', aprobado: false, nota: 3},
    { nombre: 'Nanca', aprobado: true, nota: 8},
    { nombre: 'Loperfila', aprobado: false, nota: 2},
    { nombre: 'Marisa', aprobado: false ,nota: 1 },
    { nombre: 'Raul', aprobado: false ,nota: 3 },
    { nombre: 'Perez', aprobado: false ,nota: 4 },
  ];
  
  alternarError() {
    this.hasError = !this.hasError;
  }
  
}
