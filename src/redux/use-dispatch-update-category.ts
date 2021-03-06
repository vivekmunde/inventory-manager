import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { TCategory, TCategoryInput, TCategoryField } from '../types';
import action from './action';
import store from './store';

const convertCategoryInputToCategory = (categoryId: string, data: TCategoryInput): TCategory => {
  const fields: TCategoryField[] = data.fields.map((it) => ({
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

    const stateCategory = state.categories.find((it) => it.id === payload.categoryId);
    const areCategoryFieldsRemoved =
      payload.categoryInput.fields.map((it) => it.id).filter(Boolean).sort().join('')
      !== stateCategory?.fields.map((it) => it.id).filter(Boolean).sort().join('');
    if (areCategoryFieldsRemoved) {
      return dispatch(action({
        ...state,
        categories: state.categories.map((it) => it.id === payload.categoryId
          ? convertCategoryInputToCategory(payload.categoryId, payload.categoryInput)
          : it),
        inventoryItems: state.inventoryItems.map((inventoryItem) => ({
          ...inventoryItem,
          data: inventoryItem.data.filter((data) => payload.categoryInput.fields.find((field) => field.id === data.categoryFieldId))
        })),
      }));
    }

    return dispatch(action({
      ...state,
      categories: state.categories.map((it) => it.id === payload.categoryId
        ? convertCategoryInputToCategory(payload.categoryId, payload.categoryInput)
        : it),
    }));
  };
};

export default useDispatchUpdateCategory;
