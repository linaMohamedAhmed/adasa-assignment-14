import { Component, inject } from '@angular/core';
import { Global } from '../../services/global';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public globalservice = inject(Global);
}
