import { useDispatch } from 'react-redux';

import action from './action';
import store from './store';

const useDispatchDeleteCategory = () => {
  const dispatch = useDispatch();

  return (categoryId: string) => {
    const state = store.getState();

    return dispatch(action({
      ...state,
      categories: state.categories.filter((it) => it.id !== categoryId),
    }));
  };
};

export default useDispatchDeleteCategory;
