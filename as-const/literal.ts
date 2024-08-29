type MealType = "breakfast" | "lunch" | "dinner";

function orderMeal(meal: MealType) {
  return `Ordering ${meal}` as const;
}

const myMeal = orderMeal("lunch");