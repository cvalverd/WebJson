import { Routes } from '@angular/router';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';

export const routes: Routes = [
    {path: 'lista-personas', component: ListaPersonasComponent},
    {path: '**', redirectTo: 'lista-personas'}
];

