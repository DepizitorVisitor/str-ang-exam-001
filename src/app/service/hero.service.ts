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
      "address": "Barlang"
    },
    {
      "id": 2, 
      "name": "Vuk",
      "superPower": "Nem eszi meg tást",
      "address": "Rókaluk"
    },
    {
      "id": 3, 
      "name": "Főkukac",
      "superPower": "Beszél",
      "address": "Horgászláda"
    },
    {
      "id": 4, 
      "name": "Vizipók",
      "superPower": "Víz alatt él",
      "address": "Nagy tó"
    },
    {
      "id": 5, 
      "name": "Királylány",
      "superPower": "Tud kiabálni",
      "address": "Vártorony"
    },
  ];

  constructor() { }

  getAll(): Hero[] {
    return(this.list);
  }

}
