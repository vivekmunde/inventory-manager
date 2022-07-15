export type TCategoryFieldType = 'ShortText' | 'LongText' | 'Number' | 'Date';

export type TCategoryField = {
  id: string,
  type: TCategoryFieldType,
  title: String,
};

export type TCategoryFieldInput = {
  id: string | null | undefined,
  type: TCategoryFieldType,
  title: String,
};

export type TCategory = {
  id: string;
  slug: string;
  title: string;
  fields: TCategoryField[];
  fieldTitleId: string;
};

export type TCategoryInput = {
  title: string;
  fields: TCategoryFieldInput[];
  fieldTitleIdIndex: number;
};
