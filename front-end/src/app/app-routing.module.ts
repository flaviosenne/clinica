import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaComponent } from '../app/views/receita/agenda.component'
import { LoginComponent} from '../app/views/login/login.component'
import { FuncionariosComponent } from './views/funcionarios/funcionarios.component';
import {PacienteComponent} from '../app/views/paciente/paciente.component'
import {UsuarioComponent} from '../app/views/usuario/usuario.component'
import { HomeComponent } from './views/home/home.component';
import { ConsultaComponent } from './views/consulta/consulta.component';
import { ConsultaUpdateComponent } from './views/consulta-update/consulta-update.component';


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
