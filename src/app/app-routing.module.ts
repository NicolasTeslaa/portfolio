import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProjetosComponent } from './components/projetos/projetos.component';

const routes: Routes = [
    { path: 'principal', component: PrincipalComponent, pathMatch: 'full' },
    { path: 'habilidades', component: HabilidadesComponent, pathMatch: 'full' },
    { path: 'footer', component: FooterComponent, pathMatch: 'full' },
    { path: 'contato', component: ContactComponent, pathMatch: 'full' },
    { path: 'projetos', component: ProjetosComponent, pathMatch: 'full' },
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }
  