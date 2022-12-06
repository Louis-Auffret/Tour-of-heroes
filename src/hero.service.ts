import { Injectable } from '@angular/core';
import { Hero } from './app/hero';
import { HEROES } from './app/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() {}
}
