import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  imprimir(): void{
    // this.funcionario.showMessage('Operação Bem sucedida')
    console.log('imprimir')
  }

  cancel():void{
    this.route.navigate(['/home'])
  }
}
