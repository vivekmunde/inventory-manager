import { TCategory, TCategoryInput, TCategoryFieldInput } from '../../types';
import { TCategoryFormInput } from './types';

export const convertCategoryToCategoryFormInput = (data: TCategory): TCategoryFormInput => {
  const fields = data.fields.map((it) => ({
    id: it.id,
    uiKey: it.id,
    type: it.type,
    title: it.title,
  }));
  return {
    title: data.title,
    fields,
    fieldTitleUiKey: fields.find((it) => it.id === data.fieldTitleId)?.uiKey ?? '',
  };
};

export const convertCategoryFormInputToCategoryInput = (data: TCategoryFormInput): TCategoryInput => {
  const inputValues: TCategoryInput = {
    title: data.title,
    fields: data.fields.map<TCategoryFieldInput>((it) => ({
      id: it.id,
      type: it.type,
      title: it.title,
    })),
    fieldTitleIdIndex: data.fields.findIndex((it) => it.uiKey === data.fieldTitleUiKey),
  };
  return inputValues;
};
