import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { TCategory, TCategoryInput, TInventoryItemField } from '../types';
import action from './action';
import store from './store';

const convertCategoryInputToCategory = (categoryId: string, data: TCategoryInput): TCategory => {
  const fields: TInventoryItemField[] = data.fields.map((it) => ({
    id: it.id ?? nanoid(),
    type: it.type,
    title: it.title,
  }));

  const inputValues: TCategory = {
    id: categoryId,
    slug: data.title.replace(/\s/, '-'),
    title: data.title,
    fields,
    fieldTitleId: fields[data.fieldTitleIdIndex].id,
  };

  return inputValues;
};

const useDispatchAddCategory = () => {
  const dispatch = useDispatch();

  return (payload: { categoryId: string, categoryInput: TCategoryInput }) => {
    const state = store.getState();

    const categoryIndexToUpdate = state.categories.findIndex((it) => it.id === payload.categoryId);

    if (categoryIndexToUpdate > -1) {
      const categoryData = convertCategoryInputToCategory(payload.categoryId, payload.categoryInput);
      state.categories.splice(categoryIndexToUpdate, 1, categoryData);

      return dispatch(action({
        ...state,
        categories: [
          ...state.categories,
        ],
      }));
    } else {
      return dispatch(action(state));
    }
  };
};

export default useDispatchAddCategory;
