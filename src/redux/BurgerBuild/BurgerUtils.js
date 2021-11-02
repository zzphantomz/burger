const updatePurchaseState = (ingredients) => {
  const sum = Object.keys(ingredients)
    .map((igKey) => {
      return ingredients[igKey];
    })
    .reduce((sum, el) => {
      return sum + el;
    }, 0);
  return sum > 0;
};

export const addIngredient = (state, type) => {
  const oldIngredient = state.ingredients[type];
  const updateCount = oldIngredient + 1;
  const priceAddition = state.price[type];
  const oldPrice = state.totalPrice;
  const newPrice = oldPrice + priceAddition;
  const updateIngredient = { ...state.ingredients, [type]: updateCount };
  const setPurchasable = updatePurchaseState(updateIngredient);
  return {
    ...state,
    totalPrice: newPrice,
    ingredients: updateIngredient,
    purchasable: setPurchasable,
  };
};

export const removeIngredient = (state, type) => {
  const oldIngredient = state.ingredients[type];
  const updateCount = oldIngredient - 1;
  const priceDes = state.price[type];
  const oldPrice = state.totalPrice;
  const newPrice = oldPrice - priceDes;
  const updateIngredient = { ...state.ingredients, [type]: updateCount };
  return {
    ...state,
    totalPrice: newPrice,
    ingredients: updateIngredient,
    purchasable: updatePurchaseState(updateIngredient),
  };
};
