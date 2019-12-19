import { ClienteService } from './cliente/cliente.service';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClienteComponent } from './cliente/cliente.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './cliente/formulario.component';
import { FormsModule } from '@angular/forms';

const ROUTES: Routes = [
  { path: '', redirectTo: '/cliente', pathMatch: 'full' },
  { path: 'directivas', component: DirectivaComponent},
  { path: 'cliente', component: ClienteComponent},
  { path: 'cliente/formulario', component: FormularioComponent},
  { path: 'cliente/formulario/:id', component: FormularioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClienteComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
