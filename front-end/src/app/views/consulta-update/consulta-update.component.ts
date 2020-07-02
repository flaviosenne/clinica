import { Component, OnInit } from '@angular/core';
import { ConsultaService } from './../../services/consulta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Consulta } from './../../model/consulta.model';
import { MedicoService } from './../../services/medico.service';
import { PacienteService } from './../../services/paciente.service';
import { Paciente } from './../../model/paciente.model';
@Component({
  selector: 'app-consulta-update',
  templateUrl: './consulta-update.component.html',
  styleUrls: ['./consulta-update.component.css']
})
export class ConsultaUpdateComponent implements OnInit {

  consulta: any = {
    medic: '',
    pacient:  '',
    description: '',
    status: '',
    date: ''
  }

  medico: any[]
  paciente: any[] 

  constructor(private consultaService: ConsultaService,
    private router: Router, private route: ActivatedRoute,
    private medicoService: MedicoService, private pacienteService: PacienteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.consultaService.readById(id).subscribe(consulta => {
      console.log(consulta)
      
      this.medicoService.readById(consulta.medic).subscribe(medico => {
        console.log(medico)
        this.consulta.medic = medico.name
      })
      
      this.pacienteService.readById(consulta.pacient).subscribe(paciente => {
        console.log(paciente)
        this.consulta.pacient = paciente.name
      })
      
      
      this.consulta = consulta
 
    }) 

  }
  update(): void{
    this.consultaService.update(this.consulta)

  }
  cancel(): void{
    this.router.navigate(['/home'])
  }
}
