import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { ConsultaService} from './../../services/consulta.service'
import { FuncionarioService } from './../../services/funcionario.service';
import { PacienteService } from './../../services/paciente.service';

// models
import {Consulta} from './../../model/consulta.model'
import { Funcionario } from './../../model/funcionario.model';
import { Paciente } from './../../model/paciente.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  consultas: Consulta[]
  medicos: Funcionario[]
  pacientes: Paciente[]
  
  
  constructor(private route: Router, 
  private consultaService: ConsultaService,
  private medicService: FuncionarioService,
  private pacienteService: PacienteService) { }

  ngOnInit(): void {
    console.log('teste...')
    this.medicService.read().subscribe(medico => {
      this.medicos = medico
      console.log(this.medicos)
    })
    this.pacienteService.read().subscribe(paciente => {
      this.pacientes = paciente
      console.log(this.pacientes)
    })

    
  }

  salvar(): void{
    // this.funcionario.showMessage('Operação Bem sucedida')
    console.log('Certo')
  }

  cancel():void{
    this.route.navigate(['/home'])
  }

}
