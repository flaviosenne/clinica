import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// observable: responssável por requisições HTTP
import { HttpClientModule} from '@angular/common/http'

// Modulos de Terceiros
import { MaterialModule} from './mterial/mterial.module'
import { FormsModule } from '@angular/forms'

// Componentes gerado para navegação 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FuncionariosComponent } from './views/funcionarios/funcionarios.component';
import { PacienteComponent } from './views/paciente/paciente.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { LoginComponent } from './views/login/login.component';
import { AgendaComponent } from './views/receita/agenda.component';
import { HomeComponent } from './views/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ConsultaComponent } from './views/consulta/consulta.component';
import { ConsultaUpdateComponent } from './views/consulta-update/consulta-update.component';
import { PacientesReadComponent } from './views/pacientes-read/pacientes-read.component';
import { PacienteUpdateComponent } from './views/paciente-update/paciente-update.component';
import { FuncionariosReadComponent } from './views/funcionarios-read/funcionarios-read.component';
import { FuncionariosUpdateComponent } from './views/funcionarios-update/funcionarios-update.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FuncionariosComponent,
    PacienteComponent,
    UsuarioComponent,
    LoginComponent,
    AgendaComponent,
    HomeComponent,
    NavComponent,
    ConsultaComponent,
    ConsultaUpdateComponent,
    PacientesReadComponent,
    PacienteUpdateComponent,
    FuncionariosReadComponent,
    FuncionariosUpdateComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
