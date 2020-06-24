import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// observable: responssável por requisições HTTP
import { HttpClientModule, HttpClient} from '@angular/common/http'

// Modulos de Terceiros
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule }  from '@angular/material/sidenav';
import {MatSnackBarModule }  from '@angular/material/snack-bar';
import { MatInputModule} from '@angular/material/input'
import { MatFormFieldModule, MatFormField} from '@angular/material/form-field'
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
    ConsultaUpdateComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
