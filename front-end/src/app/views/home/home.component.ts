import { Component, OnInit } from '@angular/core';
import { Consulta } from './../../model/consulta.model';
import { ConsultaService } from './../../services/consulta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  consultas: Consulta[]  

  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.consultaService.read().subscribe(consultas => {
      this.consultas = consultas
    })
        
  }
  delete(id): void {
    this.consultaService.delete(id).subscribe(()=> {
      this.consultaService.showMessage('Excluido com sucesso')
      this.ngOnInit()
    })
  }

}
