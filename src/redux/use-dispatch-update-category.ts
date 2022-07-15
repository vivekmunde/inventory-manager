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

const useDispatchUpdateCategory = () => {
  const dispatch = useDispatch();

  return (payload: { categoryId: string, categoryInput: TCategoryInput }) => {
    const state = store.getState();

    return dispatch(action({
      ...state,
      categories: state.categories.map((it) => it.id === payload.categoryId
        ? convertCategoryInputToCategory(payload.categoryId, payload.categoryInput)
        : it),
    }));
  };
};

export default useDispatchUpdateCategory;
