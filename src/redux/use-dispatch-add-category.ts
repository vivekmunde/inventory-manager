import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

import { TCategory, TCategoryInput, TCategoryField } from '../types';
import action from './action';
import store from './store';

const convertCategoryInputToCategory = (data: TCategoryInput): TCategory => {
  const fields: TCategoryField[] = data.fields.map((it) => ({
    id: nanoid(),
    type: it.type,
    title: it.title,
  }));

  const inputValues: TCategory = {
    id: nanoid(),
    slug: data.title.replace(/\s/, '-'),
    title: data.title,
    fields,
    fieldTitleId: fields[data.fieldTitleIdIndex].id,
  };

  return inputValues;
};

const useDispatchAddCategory = () => {
  const dispatch = useDispatch();

  return (categoryInput: TCategoryInput) => {
    const state = store.getState();

    const categoryData = convertCategoryInputToCategory(categoryInput);

    return dispatch(action({
      ...state,
      categories: [
        ...state.categories,
        categoryData,
      ],
    }));
  };
};

export default useDispatchAddCategory;
