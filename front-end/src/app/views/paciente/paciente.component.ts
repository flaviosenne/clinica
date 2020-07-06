import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from './../../services/paciente.service';
import { Paciente } from './../../model/paciente.model';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  paciente: Paciente = {
    name: '',
    cpf: '',
    contact: '',
    streat: '',
    bairro: '',
    city: ''

  }

  constructor(private route: Router, private pacienteService: PacienteService) { }

  ngOnInit(): void {
  }

  salvar(): void{
    this.pacienteService.create(this.paciente).subscribe(() => {
      this.pacienteService.showMessage(this.paciente.name+' criado com sucesso')
      this.route.navigate(['/pacientes-read'])
    })

  }

  cancel():void{
    this.route.navigate(['/pacientes-read'])
  }
}
