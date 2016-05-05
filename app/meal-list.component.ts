import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  pipes: [CaloriesPipe],
  template: `
    <h4>Calorie Count: {{calorieCount}}</h4>
    <div class="form">
      <div class="form-fields">
        <label>By Calories:</label>
        <select (change)="onChangeCalories($event.target.value)" class="filter">
          <option value="all"  selected="selected">Show All</option>
          <option value="low">Meals with less than 300 calories</option>
          <option value="high">Meals with more than 300 calories</option>
        </select>
      </div>
    </div>
    <div *ngFor="#currentMeal of mealList
      | calories:filterCalories"
      [class.selected]="currentMeal === selectedMeal">
      <h3 (click)="mealClicked(currentMeal)">
        {{ currentMeal.name }}
      </h3>
      <div class="meal-item">
        <meal-display
          *ngIf="currentMeal === selectedMeal"
          [meal]="currentMeal">
        </meal-display>
      </div>
    </div>
    <edit-meal-details
      *ngIf="selectedMeal"
      [meal]="selectedMeal">
    </edit-meal-details>
    <new-meal
      (onSubmitNewMeal)="createMeal($event)">
    </new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public filterCalories: string = "all";
  public calorieCount: number = 0;
  constructor() {}
  mealClicked(clickedMeal: Meal): void {
    if(this.selectedMeal === clickedMeal) {
      this.selectedMeal = undefined;
    } else {
    this.selectedMeal = clickedMeal;
    }
  }
  createMeal(newMealInfo): void {
    this.mealList.push(
      new Meal(newMealInfo[0], newMealInfo[1], newMealInfo[2])
    );
    this.calorieCount += newMealInfo[2];
  }
  onChangeCalories(selectCalories) {
    this.filterCalories = selectCalories;
  }
}
