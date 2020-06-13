import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FuncionariosComponent } from './views/funcionarios/funcionarios.component';
import { PacienteComponent } from './views/paciente/paciente.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { LoginComponent } from './views/login/login.component';
import { AgendaComponent } from './views/agenda/agenda.component';
import { HomeComponent } from './views/home/home.component';
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
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
