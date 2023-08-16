import { REMOVE_ITEM, ADD_ITEM_SUCCESS, CHECKOUT } from "./CartType";

const initialState = {
  Item: [],
  itemNum: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_SUCCESS:
      const itemindex = state.Item.findIndex(
        (item) => item.Id === action.payload.Id
      );
      if (itemindex < 0) {
        console.log(itemindex);
        console.log(action.payload, "ACtion PAyload");
        const newItem = { ...action.payload, quantity: 1 }; // Initialize quantity to 1
        return {
          ...state,
          Item: [...state.Item, newItem],
        };
      }
      return state;
    case REMOVE_ITEM:
      const updatedItems = state.Item.filter(
        (item) => item.Id !== action.payload.Id
      );
      return {
        ...state,
        Item: updatedItems,
      };
    case CHECKOUT:
      return {
        ...state,
        Item: [],
        itemNum: 0,
      };

    default:
      return state;
  }
};

export default cartReducer;
