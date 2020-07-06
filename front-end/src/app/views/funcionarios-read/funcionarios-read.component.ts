import { Component, OnInit } from '@angular/core';
import { MedicoService } from './../../services/medico.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';

@Component({
  selector: 'app-funcionarios-read',
  templateUrl: './funcionarios-read.component.html',
  styleUrls: ['./funcionarios-read.component.css']
})
export class FuncionariosReadComponent implements OnInit {

  constructor(private medicService: MedicoService,
    private recepcionistaService: RecepcionistaService) { }

  medicos = []
  recepcionistas = []

  ngOnInit(): void {
    this.medicService.read().subscribe(medicos => {
      this.medicos = medicos
    })

    this.recepcionistaService.read().subscribe(recepcionistas => {
      this.recepcionistas = recepcionistas
    })
  }

  delete1(id){
    console.log(id)
    this.medicService.delete(id).subscribe(()=> {
      this.medicService.showMessage('Excluido com sucesso')
      this.ngOnInit()
    })
  }
  delete2(id){
    console.log(id)
    this.recepcionistaService.delete(id).subscribe(()=> {
      this.recepcionistaService.showMessage('Excluido com sucesso')
      this.ngOnInit()
    })
  }

}
