import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from './../model/consulta.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  baseUrl = 'http://localhost:3333/consultations'

  consulta: Consulta = {
    medic: '',
    pacient: '',
    description: ''
  }

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  read(): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(this.baseUrl)
  }

  readById(id: String): Observable<Consulta>{
    const url = this.baseUrl+ '/'+id
    return this.http.get<Consulta>(url)
  }
  
  create(consulta: Consulta): Observable<Consulta>{
    return this.http.post<Consulta>(this.baseUrl, consulta)
  }
  
  update(consulta: Consulta): Observable<Consulta>{
    const url = this.baseUrl+ '/'+consulta.id
    return this.http.put<Consulta>(url, consulta)
  }

}
