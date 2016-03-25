import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';


@Component({
selector: 'meal-list',
inputs: ['mealList'],
outputs: ['onMealSelect'],
directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
template: `
  <meal-display *ngFor="#currentMeal of mealList"
    (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal"
    [meal]="currentMeal">
  </meal-display>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)" ></new-meal>
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
    this.onMealSelect.emit(clickedMeal);
    this.selectedMeal = clickedMeal;
  }
  createMeal(newMealInfo): void {
    this.mealList.push(
      new Meal(newMealInfo[0], newMealInfo[1], newMealInfo[2])
    );
  }
}
