import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sing-card',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sing-card.component.html',
  styleUrl: './sing-card.component.scss'
})
export class SingCardComponent {

}
