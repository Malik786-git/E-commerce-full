import { ADD_TO_CART } from "../action";

const shopReducer = (
  state = {
    quantity: 0,
    AddedProductList: [],
  },
  action
) => {
  if (action.type === ADD_TO_CART) {
    return {
      quantity: state.quantity + 1,
      AddedProductList: [...state.AddedProductList, action.payload]
    };
  }

  return state;
};

export default shopReducer;
