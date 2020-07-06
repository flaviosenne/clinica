import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { ConsultaService} from './../../services/consulta.service'
import { MedicoService } from '../../services/medico.service';
import { PacienteService } from './../../services/paciente.service';

// models
import {Consulta} from './../../model/consulta.model'
import { Medico } from '../../model/medico.model';
import { Paciente } from './../../model/paciente.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consultas: Consulta[]
  medicos: Medico[]
  pacientes: Paciente[]

  consultation: Consulta ={
    medic: '',
    pacient: '',
    description: ''
  }

  
  
  constructor(private route: Router, 
  private consultaService: ConsultaService,
  private medicService: MedicoService,
  private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.medicService.read().subscribe(medico => {
      this.medicos = medico
    })
    this.pacienteService.read().subscribe(paciente => {
      this.pacientes = paciente
    })

    
  }

  salvar(): void{
    this.consultaService.create(this.consultation).subscribe(() => {
        this.consultaService.showMessage('consulta criada agenda com sucesso')
        this.route.navigate(['/home'])
    })
    console.log('Certo')
  }

  cancel():void{
    this.route.navigate(['/home'])
  }
  algo(){
    alert('oi')
  }

}
