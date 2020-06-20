import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  salvar(): void{
    // this.funcionario.showMessage('Operação Bem sucedida')
    console.log('Bem sucedida')

  }

  cancel():void{
    this.route.navigate(['/home'])
  }
}
