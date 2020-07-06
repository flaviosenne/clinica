import { Component, OnInit } from '@angular/core';
import { Paciente } from './../../model/paciente.model';
import { PacienteService } from './../../services/paciente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paciente-update',
  templateUrl: './paciente-update.component.html',
  styleUrls: ['./paciente-update.component.css']
})
export class PacienteUpdateComponent implements OnInit {
  paciente: Paciente = {
    name: '',
    cpf: '',
    contact: '',
    streat: '',
    bairro: '',
    city: ''

  }
  constructor(
    private pacienteService: PacienteService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.pacienteService.readById(this.route.snapshot.paramMap.get('id')).subscribe(paciente => {
      this.paciente = paciente
      console.log(paciente)
    })
    
  }

  update(): void{
    console.log(this.paciente)
    this.pacienteService.update(this.paciente).subscribe(() => {
      this.pacienteService.showMessage(this.paciente.name+' atualizado com sucesso')
      this.router.navigate(['/pacientes-read'])
    })

  }

  cancel():void{
    this.router.navigate(['/pacientes-read'])
  }
}
