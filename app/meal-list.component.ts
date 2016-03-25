import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
selector: 'meal-list',
inputs: ['mealList'],
outputs: ['onMealSelect'],
template: `
  <div *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal">
    <h3>{{ currentMeal.name }}</h3>
  </div>
`
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
console.log('child', clickedMeal);
    this.onMealSelect.emit(clickedMeal);
    this.selectedMeal = clickedMeal;
  }
}
