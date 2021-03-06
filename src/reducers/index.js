const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CAROUSEL_ITEM":
      return {
        ...state,
        carousel_active_item: state.carousel[action.payload],
      };

    case "SET_ACTIVE_TP_ITEM":
      return {
        ...state,
        trustpilot_active_item: state.trustpilot[action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};
export default reducer;
