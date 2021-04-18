import * as types from '../constants/actionTypes'

export const addToCart=(product,quantity)=>{
   return {
    type:types.ADD_TO_CART,
    product,
    quantity,
   }
}

export const messenger=(messenger)=>{
   return {
    type:types.CHANGE_MESSENGER,
    messenger,
   }
}
export const deleteCard=(product)=>{
   return {
    type:types.DELETE_CART,
    product,
   }
}
export const changeNumberCart=(product,value)=>{
   return {
    type:types.CHANGE_NUMBER_CART,
    product,
    value,
   }
}
export const completeCart=()=>{
   return {
    type:types.COMPLETE_CART
   }
}
