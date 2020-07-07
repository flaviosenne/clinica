import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReceitaService } from './../../services/receita.service';
import { Receita } from './../../model/receita.model';
import { Paciente } from './../../model/paciente.model';
import { Medico } from 'src/app/model/medico.model';
import { MedicoService } from './../../services/medico.service';
import { PacienteService } from './../../services/paciente.service';
import { Consulta } from './../../model/consulta.model';
import { ConsultaService } from './../../services/consulta.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  consultations: Consulta[]
  receita: Receita = {
    prescription: '',
    consultation: ''
  }
  constructor(private route: Router, private receitaService: ReceitaService, 
    private consultaService: ConsultaService) { }

  ngOnInit(): void {
    this.consultaService.read().subscribe(consulta => {
      this.consultations = consulta
    })
  }

  imprimir(): void{
    this.receitaService.create(this.receita).subscribe(() => {
      this.receitaService.showMessage('Imprimido')
      this.route.navigate(['/receita-read'])
    })
    
  }
  
  cancel():void{
    this.route.navigate(['/receita-read'])
  }
}
