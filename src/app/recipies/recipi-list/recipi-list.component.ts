import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipi-list',
  templateUrl: './recipi-list.component.html',
  styleUrls: ['./recipi-list.component.css']
})
export class RecipiListComponent implements OnInit {

  recipies: Recipe[]=[
    new Recipe('My recipe','This is a recipe','https://spoonacular.com/cdn/ingredients_100x100/apple.jpg'),
    new Recipe('My recipe','This is a recipe','https://spoonacular.com/cdn/ingredients_100x100/apple.jpg'),
    new Recipe('My recipe','This is a recipe','https://spoonacular.com/cdn/ingredients_100x100/apple.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
