import { Component, OnInit } from '@angular/core';
import { PacienteService } from './../../services/paciente.service';

@Component({
  selector: 'app-pacientes-read',
  templateUrl: './pacientes-read.component.html',
  styleUrls: ['./pacientes-read.component.css']
})
export class PacientesReadComponent implements OnInit {

  constructor(private pacienteService: PacienteService) { }


  pacientes = []
  ngOnInit(): void {

    this.pacienteService.read().subscribe(paciente => {
      this.pacientes = paciente
    })
  }
  
  delete(id){
    console.log(id)
    this.pacienteService.delete(id).subscribe(()=> {
      this.pacienteService.showMessage('Excluido com sucesso')
      this.ngOnInit()
    })
  }
}
