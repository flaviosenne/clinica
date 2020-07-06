import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicoService } from './../../services/medico.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';

@Component({
  selector: 'app-funcionarios-update',
  templateUrl: './funcionarios-update.component.html',
  styleUrls: ['./funcionarios-update.component.css']
})
export class FuncionariosUpdateComponent implements OnInit {

  constructor(private router: Router, 
    private route: ActivatedRoute,
    private medicoService: MedicoService,
    private recepcionistaSevice: RecepcionistaService) { }

    tipo = ''
    funcionario: any ={}
    id = this.route.snapshot.paramMap.get('id')
  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id')

    if(this.id.length == 8){

      this.medicoService.readById(this.id).subscribe(medico => {
        this.funcionario = medico
        this.tipo = 'medico'
      })
    }
    else if(this.id.length == 4){
         
      this.recepcionistaSevice.readById(this.id).subscribe(recepcionista => {
        this.funcionario =recepcionista
        this.tipo = 'recepcionista'
      })
    }
      
      
  }

  update(){
    if(this.id.length == 8){
      this.medicoService.update(this.funcionario).subscribe(()=> {
        this.medicoService.showMessage(this.funcionario.name+ ' atualizado com sucesso')
        this.router.navigate(['/funcionario-read'])
      })
    }
    else if(this.id.length == 4){
      this.recepcionistaSevice.update(this.funcionario).subscribe(() => {
        this.recepcionistaSevice.showMessage(this.funcionario.name+' atualizado com sucesso')
        this.router.navigate(['/funcionario-read'])    
      })  
    }
  }
  cancel():void{
    this.router.navigate(['/funcionario-read'])
  }
}
