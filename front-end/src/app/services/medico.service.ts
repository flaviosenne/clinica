import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'

// responssável por fazer requisições HTTP nas APIs
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Medico } from '../model/medico.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  baseUrl = 'http://localhost:3333/medic'
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }


  create(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.baseUrl, medico)
  }

  read(): Observable<Medico[]>{
    return this.http.get<Medico[]>(this.baseUrl)
  }

  readById(id: String): Observable<Medico>{
    const url = this.baseUrl+'/'+id
    console.log('get ', url)
    return this.http.get<Medico>(url)
  }
  update(medic: any) {
    const url = this.baseUrl + '/' + medic._id
    return this.http.put(url,medic)
  }

  delete(id: String) {
    const url = this.baseUrl
    return this.http.request('DELETE', url,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body:  {_id: id, auth: '7f74606231e9' }
    })
  }
}
