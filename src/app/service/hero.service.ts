import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list: Hero[] = [
    {
      "id": 1, 
      "name": "Süsü",
      "superPower": "Egyfejű",
      "address": "barlang"
    },
    {
      "id": 2, 
      "name": "Vuk",
      "superPower": "Nem eszi meg tást",
      "address": "barlang"
    },
    {
      "id": 3, 
      "name": "Főkukac",
      "superPower": "beszél",
      "address": "horgászládában"
    },
    {
      "id": 4, 
      "name": "Vizipók",
      "superPower": "Tud beszélni",
      "address": "Nagy tó"
    },
    {
      "id": 5, 
      "name": "Királylány",
      "superPower": "kiabálni",
      "address": "Vártorony"
    },
  ];

  constructor() { }

  getAll(): Hero[] {
    return(this.list);
  }

}
