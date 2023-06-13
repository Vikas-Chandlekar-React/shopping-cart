export const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case ACTIONS.CHANGE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.quantity = action.payload.quantity)
            : c.quantity
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SORT_BY_PRICE:
      return { ...state, sort: action.payload };
    case ACTIONS.FILTER_BY_STOCK:
      return { ...state, byStock: !state.byStock };
    case ACTIONS.FILTER_BY_DELIVERY:
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case ACTIONS.FILTER_BY_RATING:
      return { ...state, byRating: action.payload };
    case ACTIONS.FILTER_BY_SEARCH:
      return { ...state, searchQuery: action.payload };
    case ACTIONS.CLEAR_FILTERS:
      return { byStock: false, byFastDelivery: false, byRating: 0 };
    default:
      return state;
  }
};

export const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CHANGE_CART_QUANTITY: "CHANGE_CART_QUANTITY",
  SORT_BY_PRICE: "SORT_BY_PRICE",
  FILTER_BY_STOCK: "FILTER_BY_STOCK",
  FILTER_BY_DELIVERY: "FILTER_BY_DELIVERY",
  FILTER_BY_RATING: "FILTER_BY_RATING",
  FILTER_BY_SEARCH: "FILTER_BY_SEARCH",
  CLEAR_FILTERS: "CLEAR_FILTERS",
};
