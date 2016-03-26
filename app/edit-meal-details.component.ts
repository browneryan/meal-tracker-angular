import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="edit-form">
      <h3>Edit Description:</h3>
      <input [(ngModel)]="meal.name"/>
      <input [(ngModel)]="meal.details"/>
      <input [(ngModel)]="meal.calories" type="number"/>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
