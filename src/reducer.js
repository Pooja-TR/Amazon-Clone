import { act } from "react-dom/test-utils";

export const initialState = {
  basket: [],
  // user:null,
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//state of the application
//action = > adding or removing from basket
const reducer = (state, action) => {
  //------------------------------------------------------------------------
  //console.log(action)
  //on click of "add to basket" it will display details of particular product
  //------------------------------------------------------------------------

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // return {
      //   ...state,
      //   basket: state.basket.filter((item) => item.id !== action.id),
      // }; removes every item with same id
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket]; //copy
      if (index >= 0) {
        newBasket.splice(index, 1); //cutting the array[012] => [01] or [12]
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
//u remvoed something from the basket the reducer
//knows wt to do

//u added something to the basket the reducer knows wt to do
