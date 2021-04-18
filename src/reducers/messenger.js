import * as types from "../constants/actionTypes";
import * as msg from "../constants/messenger";
var initialState = msg.MSG_WELCOME;
var messenger = (state = initialState, action) => {
  switch (action.type) {
    case msg.MSG_WELCOME:
      return state;
    case types.CHANGE_MESSENGER:
      return action.messenger;
    default:
      return state;
  }
};
export default messenger;
