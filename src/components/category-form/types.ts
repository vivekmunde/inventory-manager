import { TInventoryItemFieldInput } from '../../types';

export interface TInventoryItemFieldFormInput extends TInventoryItemFieldInput {
  uiKey: string,
}

export type TCategoryFormInput = {
  title: string;
  fields: TInventoryItemFieldFormInput[];
  fieldTitleUiKey: string;
};
