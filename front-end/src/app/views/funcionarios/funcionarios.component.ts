import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'


import { MedicoService } from '../../services/medico.service';
import { Medico } from 'src/app/model/medico.model';
import { Recepcionista } from './../../model/recepcionista.model';
import { RecepcionistaService } from './../../services/recepcionista.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionario: any = {
    auth: '7f74606231e9',
    crm: null,
    salario: null,
    name: '',
    contact: '',
    email: '',
    streat: '',
    cpf: ''
  }

  
  constructor(private medicoService: MedicoService, private recepcionistaService: RecepcionistaService,
     private route: Router) { }

  tipo: String = ''
  ngOnInit(): void {
  }
  
  salvar(): void{
    if(this.tipo == 'medico'){
      this.medicoService.create(this.funcionario).subscribe(()=> {
        this.medicoService.showMessage(this.funcionario.name + ' cadastrado com sucesso')
        this.route.navigate(['/home'])
      })
    }
    if(this.tipo == 'recepcionista'){
      this.recepcionistaService.create(this.funcionario).subscribe(() =>{
        this.recepcionistaService.showMessage(this.funcionario.name + ' cadastrado co sucesse')
        this.route.navigate(['/home'])
      })
    }


  }

  cancel():void{
    this.route.navigate(['/home'])
  }

}
