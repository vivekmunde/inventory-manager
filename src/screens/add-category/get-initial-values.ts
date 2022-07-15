import { nanoid } from 'nanoid';

import { TCategoryFormInput } from '../../components/category-form/types';

export const getInitialValues = () => {
  const uiKey = nanoid();
  const initialValues: TCategoryFormInput = {
    title: '',
    fields: [{ id: undefined, uiKey, type: 'ShortText', title: 'Model' }],
    fieldTitleUiKey: uiKey,
  };
  return initialValues;
};
