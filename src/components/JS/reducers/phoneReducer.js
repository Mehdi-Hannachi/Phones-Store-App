import { data } from "../../../data";
import { ADD_PHONE } from "../actionsTypes.js/phoneActionsTypes";

const initialState = {
  phones: data,
};

const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHONE:
      return {
        ...state,
        phones: [...state.phones, action.payload],
      };

    default:
      return state;
  }
};

export default phoneReducer;
