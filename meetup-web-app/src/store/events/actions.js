import herokuapp from "../../api/herokuapp";
import { EVENTS_DATA_FETCHED } from "./actionType";
const createAction = (type, payload) => {
  return {
    type,
    payload,
  };
};

export const eventsListActions = {
  eventDataFetched: () => (dispatch, getState) => {
    console.log("data fetched");
    herokuapp
      .get("/events")
      .then((response) =>
        dispatch(createAction(EVENTS_DATA_FETCHED, response.data))
      );
  },
};
