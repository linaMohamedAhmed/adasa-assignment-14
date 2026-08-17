import { Component, inject } from '@angular/core';
import { Global } from '../../services/global';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  public globalservice = inject(Global);
}
