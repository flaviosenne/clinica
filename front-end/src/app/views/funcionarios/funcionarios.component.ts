import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';
import { Router} from '@angular/router'
import { Funcionario } from './funcionario.model';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionario: Funcionario = {
    auth: '7f74606231e9',
    crm: null,
    salario: null,
    name: '',
    contact: '',
    email: '',
    streat: '',
    cpf: ''
  }
  constructor(private funcionarioService: FuncionarioService, private route: Router) { }

  ngOnInit(): void {
  }
  
  salvar(): void{
    this.funcionarioService.create(this.funcionario).subscribe(()=> {
      this.funcionarioService.showMessage('Operação Bem sucedida')
      this.route.navigate(['/home'])

    })

  }

  cancel():void{
    this.route.navigate(['/home'])
  }

}
