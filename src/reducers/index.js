const intialState = {};

export default function reducer(state = intialState, action) {
  switch (action.type) {
    case "GET_DATA":
      state = action.payload;
      break;
      default: console.log("Some Error");
  }
  return state;
}
