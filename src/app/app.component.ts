import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sobremi= 'Soy ingeniero en sistemas computacionales con título, con conocimientos técnicos, la capacidad y ambición de superarse tanto profesional como personal.';
  correo=' ing.sis.oscarmorales@gmail.com  - oyms.agilas@gmail.com'
  num='+528715650003'
}
