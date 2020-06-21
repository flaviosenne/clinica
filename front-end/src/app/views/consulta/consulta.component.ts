import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { PacienteService } from './../../services/paciente.service';
import { FuncionarioService } from './../../services/funcionario.service';

// models
import { Funcionario } from './../../model/funcionario.model';
import { Paciente } from './../../model/paciente.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  pacientes: Paciente[]
  medicos: Funcionario[]
  
  
  constructor(private route: Router, 
  private pacienteService: PacienteService,
  private medicoService: FuncionarioService) { }

  ngOnInit(): void {
    
  }
  carregar(): void {
    console.log('teste...')
    this.pacienteService.read().subscribe(pacientes => {
      this.pacientes = pacientes
      console.log('pacientes '+ this.pacientes)
    })

    this.medicoService.read().subscribe(medicos => {
      this.medicos = medicos
      console.log('medicos ' + this.medicos)
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
