import * as actions from "./actions";

const initialState = {
  balances: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BALANCES:
      return { ...state, balances: action.payload };
   default:
      return state;
  }
};

export default reducer;