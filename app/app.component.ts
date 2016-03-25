import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Vegan Burger", "Ordered a salad on the side instead of fries.", 375),
      new Meal("Falafel", "Didn't order feta cheese.", 375),
      new Meal("Whole Bowl", "I skipped the sour cream and cheese.", 450)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}
