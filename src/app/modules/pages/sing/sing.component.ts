import { Component } from '@angular/core';
import { SingCardComponent } from '../../components/sing-card/sing-card.component';

@Component({
  selector: 'app-sing',
  standalone: true,
  imports: [SingCardComponent],
  templateUrl: './sing.component.html',
  styleUrl: './sing.component.scss'
})
export class SingComponent {

}
