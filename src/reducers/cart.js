import * as types from "../constants/actionTypes";
var data = JSON.parse(localStorage.getItem("cart"));
const initialState = data ? data : [];
const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      var { product, quantity } = action;
      var newState = {
        // product:{
        //     id: action.product.id,
        //     name: action.product.name,
        //     img:  action.product.img,
        //     description:  action.product.description,
        //     price:  action.product.price,
        //     inventory:   action.product.inventory,
        //     rating:action.product.rating,
        //   },
        //   quantity:1
        product,
        quantity,
      };
      var index = [...state].findIndex((productItem) => {
        return productItem.product.id === action.product.id;
      });
      if (index === -1) {
        state.push(newState);
      } else {
        state[index].quantity++;
      }

      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case types.DELETE_CART:
      state = [...state].filter((productItem) => {
        return productItem.product.id !== action.product.id;
      });

      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];

    case types.CHANGE_NUMBER_CART:
      var index1 = [...state].findIndex((productItem) => {
        return productItem.product.id === action.product.id;
      });
      if ([...state][index1].quantity >= 1) {
        state[index1].quantity = state[index1].quantity + action.value;
      } else if ([...state][index1].quantity === 0 && action.value === 1) {
        state[index1].quantity++;
      }

      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    case types.COMPLETE_CART:
      [...state] = [];
      localStorage.setItem("cart", JSON.stringify(state));
      return state;
    default:
      return [...state];
  }
};

export default cart;
