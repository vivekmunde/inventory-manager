import { TCategoryFieldInput } from '../../types';

export interface TCategoryFieldFormInput extends TCategoryFieldInput {
  uiKey: string,
}

export type TCategoryFormInput = {
  title: string;
  fields: TCategoryFieldFormInput[];
  fieldTitleUiKey: string;
};
