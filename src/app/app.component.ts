import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './common/components/header/header.component';
@Component({
  selector: 'sh-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ScaleHigh';
}
