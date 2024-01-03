import { Routes } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { SingComponent } from './modules/pages/sing/sing.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'singin',
        component: SingComponent,
    },
];
