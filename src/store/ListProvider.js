import React, { useState } from "react";
import { useReducer } from "react";

export const ListContext = React.createContext({});

const defaultList = {
  items: [],
  selectedItemId: [],
};

const listReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const updatedList = state.items.concat(action.payload);
      return { ...state, items: updatedList };
    }
    case "delete-single": {
      let updatedList = [...state.items];
      const selectedItemIndex = updatedList.findIndex(
        (item) => item.id === action.id
      );
      updatedList.splice(selectedItemIndex, 1);
      return { ...state, items: updatedList };
    }
    case "select": {
      let updateSelectItemId = [...state.selectedItemId];
      updateSelectItemId.push(action.id);
      return { ...state, selectedItemId: updateSelectItemId };
    }
    case "delete-selected": {
      let updatedList = [...state.items];
      let selectedItemId = [...state.selectedItemId];
      updatedList = updatedList.filter(
        (item) => !selectedItemId.includes(item.id)
      );
      selectedItemId = [];
      return { ...state, items: updatedList, selectedItemId };
    }
    default:
      return defaultList;
  }
};

const ListProvider = (props) => {
  const [itemId, setItemId] = useState(+0);
  const [listState, dispatch] = useReducer(listReducer, defaultList);

  const addItemHandler = (item) => {
    dispatch({ type: "add", payload: { ...item, id: itemId } });
    setItemId((pre) => ++pre);
  };

  const deleteItemHandler = (id) => {
    dispatch({ type: "delete-single", id: +id });
  };

  const selectItemHandler = (id) => {
    dispatch({ type: "select", id: +id });
  };

  const deleteSelectedHandler = () => {
    dispatch({ type: "delete-selected" });
  };

  const listContext = {
    items: listState.items,
    selectedItems: listState.selectedItems,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
    selectedItem: selectItemHandler,
    deleteSelected: deleteSelectedHandler,
  };

  return (
    <ListContext.Provider value={listContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
