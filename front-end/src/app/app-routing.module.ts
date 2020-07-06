import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaComponent } from '../app/views/receita/agenda.component'
import { LoginComponent} from '../app/views/login/login.component'
import { FuncionariosComponent } from './views/funcionarios/funcionarios.component';
import {PacienteComponent} from '../app/views/paciente/paciente.component'
import {PacientesReadComponent} from '../app/views/pacientes-read/pacientes-read.component'
import {UsuarioComponent} from '../app/views/usuario/usuario.component'
import { HomeComponent } from './views/home/home.component';
import { ConsultaComponent } from './views/consulta/consulta.component';
import { ConsultaUpdateComponent } from './views/consulta-update/consulta-update.component';
import { PacienteUpdateComponent } from './views/paciente-update/paciente-update.component';
import { FuncionariosReadComponent } from './views/funcionarios-read/funcionarios-read.component';
import { FuncionariosUpdateComponent } from './views/funcionarios-update/funcionarios-update.component';
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
    path: 'consulta/:id',
    component: ConsultaUpdateComponent
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
    path: 'paciente-update/:id',
    component: PacienteUpdateComponent
  },
  {
    path: 'pacientes-read',
    component: PacientesReadComponent
  },
  {
    path: 'funcionario',
    component: FuncionariosComponent
  },
  {
    path: 'funcionario-read',
    component: FuncionariosReadComponent
  },
  {
    path: 'funcionario-update/:id',
    component: FuncionariosUpdateComponent
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
