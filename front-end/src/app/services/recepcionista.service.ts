import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Recepcionista } from './../model/recepcionista.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecepcionistaService {

  baseUrl = 'http://localhost:3333/receptionist'
  
  constructor(private snackBar: MatSnackBar, 
    private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(recepcionista: Recepcionista): Observable<Recepcionista> {
    return this.http.post<Recepcionista>(this.baseUrl, recepcionista)
  }

  read(): Observable<Recepcionista[]>{
    return this.http.get<Recepcionista[]>(this.baseUrl)
  }

  readById(_id: String): Observable<Recepcionista>{
    const url = this.baseUrl+'/'+_id
    console.log('get ', url)
    return this.http.get<Recepcionista>(url)
  }


}
