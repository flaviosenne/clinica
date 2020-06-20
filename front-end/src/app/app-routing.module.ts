import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaComponent } from '../app/views/agenda/agenda.component'
import {FuncionariosComponent} from '../app/views/funcionarios/funcionarios.component'
import { LoginComponent} from '../app/views/login/login.component'
import {PacienteComponent} from '../app/views/paciente/paciente.component'
import {UsuarioComponent} from '../app/views/usuario/usuario.component'
import { HomeComponent } from './views/home/home.component';
import { ConsultaComponent } from './views/consulta/consulta.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: "usuario",
    component: UsuarioComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'paciente',
    component: PacienteComponent
  },
  {
    path: 'funcionario',
    component: FuncionariosComponent
  },
  {
    path: 'agenda',
    component: AgendaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
