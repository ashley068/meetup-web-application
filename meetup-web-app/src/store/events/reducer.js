import { EVENTS_DATA_FETCHED } from "./actionType";

// const eventsList = herokuapp.get("/events");
const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EVENTS_DATA_FETCHED:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
