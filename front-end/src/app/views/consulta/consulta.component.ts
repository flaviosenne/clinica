import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  salvar(): void{
    // this.funcionario.showMessage('Operação Bem sucedida')
    console.log('Certo')
  }

  cancel():void{
    this.route.navigate(['/home'])
  }

}
