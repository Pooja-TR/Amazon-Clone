export const initialState = {
  basket: [],
  // user:null,
};

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
    default:
      return state;
  }
};

export default reducer;
//u remvoed something from the basket the reducer
//knows wt to do

//u added something to the basket the reducer knows wt to do
