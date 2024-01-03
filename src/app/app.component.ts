import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { SingComponent } from './modules/pages/sing/sing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LoginComponent,SingComponent],
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
