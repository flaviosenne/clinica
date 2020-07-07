import { Component, OnInit } from '@angular/core';
import { ReceitaService } from './../../services/receita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaService } from './../../services/consulta.service';

@Component({
  selector: 'app-receita-update',
  templateUrl: './receita-update.component.html',
  styleUrls: ['./receita-update.component.css']
})
export class ReceitaUpdateComponent implements OnInit {

  receita: any = {}
  consultas: any []
  constructor(private receitaS: ReceitaService,
    private route: ActivatedRoute, private router: Router,
    private consultaS: ConsultaService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.receitaS.readById(id).subscribe(receita=> {
      this.receita = receita
    })

    this.consultaS.read().subscribe(consulta => {
      this.consultas = consulta
    })
  }
  update(){
    this.receitaS.readById(this.receita).subscribe(()=> {
      this.receitaS.showMessage('Receita atualizad com sucesso')
    })
  }
  cancel(){
    this.router.navigate(['/receita-read'])
  }


}
