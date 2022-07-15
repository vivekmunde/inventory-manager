import { useDispatch } from 'react-redux';

import { TCategory } from '../types';
import action from './action';
import store from './store';

const useDispatchAddCategory = () => {
  const dispatch = useDispatch();

  return (payload: TCategory) => {
    const state = store.getState();

    return dispatch(action({
      ...state,
      categories: [
        ...state.categories,
        payload,
      ],
    }));
  };
};

export default useDispatchAddCategory;
