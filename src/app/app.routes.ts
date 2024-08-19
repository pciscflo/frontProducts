import { Routes } from '@angular/router';
import {HomeComponent} from "./componente/home/home.component";
import {ClienteListarComponent} from "./componente/cliente-listar/cliente-listar.component";
import {ClienteNuevoEditComponent} from "./componente/cliente-nuevo-edit/cliente-nuevo-edit.component";
import {AcercaComponent} from "./componente/acerca/acerca.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},//página principal
  {path: 'home', component: HomeComponent},
  {path: 'acerca', component: AcercaComponent},
  {path: 'clientes', component: ClienteListarComponent},
  {path: 'cliente_nuevo_edit', component: ClienteNuevoEditComponent},
  {path: '**' , component: HomeComponent}

];
