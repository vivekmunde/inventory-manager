import { useDispatch } from 'react-redux';

import action from './action';
import store from './store';

const useDispatchDeleteInventoryItem = () => {
  const dispatch = useDispatch();

  return (inventoryItemId: string) => {
    const state = store.getState();

    return dispatch(action({
      ...state,
      inventoryItems: state.inventoryItems.filter((it) => it.id !== inventoryItemId),
    }));
  };
};

export default useDispatchDeleteInventoryItem;
