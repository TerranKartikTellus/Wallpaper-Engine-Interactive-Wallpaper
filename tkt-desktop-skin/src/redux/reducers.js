// src/redux/reducers.js
const initialState = {
  activeTab: {
    r: 2,
    c: 2,
  },
  // Add other state properties as needed
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return {
        ...state,
        activeTab: action.payload,
      };
    // Add other cases as needed
    default:
      return state;
  }
};

export default rootReducer;
