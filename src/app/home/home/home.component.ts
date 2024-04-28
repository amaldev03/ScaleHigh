import { Component } from '@angular/core';
import { CountUpDirective } from '../../common/directives/count-up.directive';
import { CommonModules } from '../../common/commonModules/commonModules.module';

@Component({
  selector: 'sh-home',
  standalone: true,
  imports: [CountUpDirective, CommonModules],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
