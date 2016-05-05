import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: true
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalories = args[0];
    if (desiredCalories === "low") {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else if (desiredCalories === "high") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else {
      return input;
    }
  }
}
