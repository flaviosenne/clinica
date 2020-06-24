import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RecepcionistaService } from './../../services/recepcionista.service';
import { MedicoService } from './../../services/medico.service';
import { Recepcionista } from 'src/app/model/recepcionista.model';
import { Medico } from './../../model/medico.model';
import { UserService } from './../../services/user.service';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String = ""
  pass: String = ""

  prop: String = 'none'
  medico: Medico[]
  recepcionista: Recepcionista[]

  constructor(private route: Router,
    private recepcionistaService: RecepcionistaService,
    private medicoService: MedicoService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.medicoService.read().subscribe(medico => {
      this.medico = medico
    })

    this.recepcionistaService.read().subscribe(recepcionista => {
      this.recepcionista = recepcionista
    })
  }

  logar(): void {

      this.medico.forEach(medico => {

        if (this.email == medico.email && this.pass == medico.senha) {
          console.log('achei')
          const usuario = medico._id

          this.userService.setUser(usuario)
          
          this.route.navigate(['/home'])
          this.medicoService.showMessage('Bem vindo ' + medico.name)
        }
        
      })
      
      this.recepcionista.forEach(recepcionista => {
        
        if (this.email == recepcionista.email && this.pass == recepcionista.senha) {
          console.log('achei')
          const usuario = recepcionista._id

          this.userService.setUser(usuario)
          
          this.route.navigate(['/home'])
          this.medicoService.showMessage('Bem vinda ' + recepcionista.name)
        }
      })


      this.medicoService.showMessage('Email ou senha incorreta ')


  }
}
