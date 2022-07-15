import { TInventoryItemFieldType } from './types';

export const fieldTypeTranslations: { type: TInventoryItemFieldType, label: string }[] = [
  { type: 'ShortText', label: 'Short text' },
  { type: 'LongText', label: 'Long text' },
  { type: 'Number', label: 'Number' },
  { type: 'Date', label: 'Date' },
];
