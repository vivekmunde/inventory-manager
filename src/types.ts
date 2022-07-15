export type TInventoryItemFieldType = 'ShortText' | 'LongText' | 'Number' | 'Date';

export type TInventoryItemField = {
  id: string,
  type: TInventoryItemFieldType,
  title: String,
};

export type TInventoryItemFieldInput = {
  id: string | null | undefined,
  type: TInventoryItemFieldType,
  title: String,
};

export type TCategory = {
  id: string;
  slug: string;
  title: string;
  fields: TInventoryItemField[];
  fieldTitleId: string;
};

export type TCategoryInput = {
  title: string;
  fields: TInventoryItemFieldInput[];
  fieldTitleIdIndex: number;
};
