import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { RecepcionistaService } from 'src/app/services/recepcionista.service';
import { MedicoService } from './../../services/medico.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private route: Router,
     private user: UserService,
     private recepcionistaService: RecepcionistaService,
     private medicoService: MedicoService) { }

  usuario: any = {
    nome: '',
    senha: '',
    email: '',
    telefone: '',
    endereco: ''
  }
  medico: any []
  recepcionista: any []
  ngOnInit(): void {
    console.log(
      this.user.getUser()
    )

    if(this.user.getUser()._id.length == 4){
        const usuario = this.recepcionistaService.readById(this.user.getUser()._id)
        usuario.forEach(user => {
          this.usuario.nome = user.name
          this.usuario.senha = user.senha
          this.usuario.email = user.email
          this.usuario.telefone = user.contact
          this.usuario.endereco = user.streat
        })
      }
      if(this.user.getUser()._id.length == 8){
        const usuario = this.medicoService.readById(this.user.getUser()._id)
        usuario.forEach(user => {
          this.usuario.nome = user.name
          this.usuario.senha = user.senha
          this.usuario.email = user.email
          this.usuario.telefone = user.contact
          this.usuario.endereco = user.streat
        })
      }
      // console.log(this.usuario)

  }
  alterar(): void{
    // this.funcionario.showMessage('Operação Bem sucedida')
    console.log('Aletera')
  }

  cancel():void{
    this.route.navigate(['/home'])
  }


}
