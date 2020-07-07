import { Component, OnInit } from '@angular/core';
import { ReceitaService } from './../../services/receita.service';
import { Receita } from './../../model/receita.model';

@Component({
  selector: 'app-receita-read',
  templateUrl: './receita-read.component.html',
  styleUrls: ['./receita-read.component.css']
})
export class ReceitaReadComponent implements OnInit {

  constructor(private receitaS: ReceitaService) { }

  receita: Receita[]
  ngOnInit(): void {
    this.receitaS.read().subscribe(receita => {
      this.receita = receita
      console.log(receita)
    })

  }

  delete(id){
    this.receitaS.delete(id).subscribe(()=> {
      this.receitaS.showMessage('Excluida com sucesso')
      this.ngOnInit()
    })
  }
}
