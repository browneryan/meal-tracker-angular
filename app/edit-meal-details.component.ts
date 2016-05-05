import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="edit-form">
      <h3>Edit Description:</h3>
      <input [(ngModel)]="meal.name"/>
      <input [(ngModel)]="meal.details"/>
      <input [(ngModel)]="meal.calories" type="number" #newCalories/>
      <button (click)="updateTotalCalories(newCalories)">Update</button>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
  public onUpdateTotalCalories: EventEmitter<number>;
  constructor() {
    this.onUpdateTotalCalories = new EventEmitter();
  }
  updateTotalCalories(inputCalories: HTMLInputElement): void {
    var newMealCalories: number = parseInt(inputCalories.value);
    this.onUpdateTotalCalories.emit(newMealCalories);
  }
}
