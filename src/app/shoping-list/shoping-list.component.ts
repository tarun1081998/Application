import { Component, OnInit } from '@angular/core';
import { Ingrediants } from '../shared/ingrediants-model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingrediantsList: Ingrediants[]=[
    new Ingrediants('Tomatoes',5),
    new Ingrediants('Apples',5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
