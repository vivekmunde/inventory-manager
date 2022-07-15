import { useDispatch } from 'react-redux';

import { TInventoryItemField } from '../types';
import action from './action';
import store from './store';

const useDispatchUpdateInventoryItem = () => {
  const dispatch = useDispatch();

  return (payload: { inventoryItemId: string, inventoryItemData: TInventoryItemField[] }) => {
    const state = store.getState();

    return dispatch(action({
      ...state,
      inventoryItems: state.inventoryItems.map((it) => it.id === payload.inventoryItemId
        ? ({
          ...it,
          data: payload.inventoryItemData,
        })
        : it),
    }));
  };
};

export default useDispatchUpdateInventoryItem;
