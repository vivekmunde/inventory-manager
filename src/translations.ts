import { TCategoryFieldType } from './types';

export const fieldTypeTranslations: { type: TCategoryFieldType, label: string }[] = [
  { type: 'ShortText', label: 'Short text' },
  { type: 'LongText', label: 'Long text' },
  { type: 'Number', label: 'Number' },
  { type: 'Date', label: 'Date' },
];
