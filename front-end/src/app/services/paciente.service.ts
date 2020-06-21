import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


import { Paciente } from '../model/paciente.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  baseUrl = 'http://localhost:3333/pacient'

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.baseUrl, paciente)
  }

  read(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.baseUrl)
  }
}
