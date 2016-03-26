import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <p>{{ meal.details }}</p>
    <p>{{ meal.calories }}</p>
  `
})
export class MealComponent {
  public meal: Meal;
}
