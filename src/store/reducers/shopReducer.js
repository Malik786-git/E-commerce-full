
import { ADD_TO_CART,  DEL_CART_ITEM } from "../action";

const initialState = {
  productQuantity: 0,
  AddedProductList: [],
  eachProductQuantity: [],
}
const shopReducer = (
  state = initialState, action
) => {
 if (action.type === ADD_TO_CART) {
    return {
      productQuantity: state.productQuantity + 1,
      AddedProductList: [...state.AddedProductList, action.payload.singleProduct],
      eachProductQuantity: [...state.eachProductQuantity, action.payload.quantity]
    };
  }  
  if (action.type ===  DEL_CART_ITEM) {
    return {
      productQuantity: state.productQuantity - 1,
      AddedProductList: state.AddedProductList.filter((item)=> item.id !== action.delItemId),
      eachProductQuantity: state.eachProductQuantity
    };
  }
 

  return state;
};



export default shopReducer;
