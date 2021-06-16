import foods from "./data/foods"

export const getFoodById = (id) => foods.find( (food) => food.id === id );

