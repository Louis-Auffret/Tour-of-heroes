import { Injectable } from '@angular/core';
import { Hero } from './app/hero';
import { HEROES } from './app/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  constructor() {}
}
