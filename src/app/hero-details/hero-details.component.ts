import { Component } from '@angular/core';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {

  heroes = HEROES;
}
