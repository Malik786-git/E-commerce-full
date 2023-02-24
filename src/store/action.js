export const ADD_TO_CART = "ADD_TO_CART";
export const DEL_CART_ITEM = " DEL_CART_ITEM";


export const addToCart = (data) => {
   return {
      type: ADD_TO_CART,
      payload: data
   }
}

export const delCartItem = (id) => {
   return {
      type: DEL_CART_ITEM,
      delItemId: id
   }
}

