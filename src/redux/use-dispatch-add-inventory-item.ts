import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { TInventoryItem, TInventoryItemInput } from '../types';
import action from './action';
import store from './store';

const convertInventoryItemInputToInventoryItem = (data: TInventoryItemInput): TInventoryItem => {
  const inputValues: TInventoryItem = {
    id: nanoid(),
    categoryId: data.categoryId,
    data: data.data,
  };

  return inputValues;
};

const useDispatchAddInventoryItem = () => {
  const dispatch = useDispatch();

  return (inventoryItemInput: TInventoryItemInput) => {
    const state = store.getState();

    const inventoryItemData = convertInventoryItemInputToInventoryItem(inventoryItemInput);

    return dispatch(action({
      ...state,
      inventoryItems: [
        ...state.inventoryItems,
        inventoryItemData,
      ],
    }));
  };
};

export default useDispatchAddInventoryItem;
