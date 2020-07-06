import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


import { Paciente } from '../model/paciente.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  readById(id: String): Observable<Paciente>{
    const url = this.baseUrl+ '/'+id
    return this.http.get<Paciente>(url)
  }
  update(paciente: any) {
    const url = this.baseUrl + '/' + paciente._id
    return this.http.put(url, paciente)
  }

  delete(id: String) {
    const url = this.baseUrl
    return this.http.request('DELETE', url,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:  {_id: id }
    })
  }
}
