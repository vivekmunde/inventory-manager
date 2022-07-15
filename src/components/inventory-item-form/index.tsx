import { DatePicker, Form, Input } from 'antd';
import moment from 'moment';
import React from 'react';

import { TCategory, TInventoryItemField } from '../../types';

const InventoryItemForm: React.FC<{
  category: TCategory;
  values: TInventoryItemField[];
  onChange: (values: TInventoryItemField[]) => void;
}> = ({ category, values, onChange }) => {
  return (
    <Form layout="vertical" colon={false} style={{ minWidth: '280px' }}>
      {category.fields.map((categoryField) => {
        const data = values.find((it) => it.categoryFieldId === categoryField.id);

        if (!data) {
          return null;
        }

        const onFieldValueChange = (changedValue: string) => {
          onChange([
            ...values.filter((it) => it.categoryFieldId !== categoryField.id),
            { ...data, value: changedValue },
          ]);
        };

        return (
          <React.Fragment key={categoryField.id}>
            <Form.Item label={categoryField.title}>
              {categoryField.type === 'ShortText' && (
                <Input
                  value={data.value ?? ''}
                  onChange={(e) => {
                    onFieldValueChange(e.target.value);
                  }}
                  type="text"
                  placeholder={categoryField.title as string}
                />
              )}
              {categoryField.type === 'LongText' && (
                <Input.TextArea
                  value={data.value ?? ''}
                  onChange={(e) => {
                    onFieldValueChange(e.target.value);
                  }}
                  placeholder={categoryField.title as string}
                />
              )}
              {categoryField.type === 'Number' && (
                <Input
                  value={data.value ?? ''}
                  onChange={(e) => {
                    onFieldValueChange(e.target.value);
                  }}
                  type="number"
                  placeholder={categoryField.title as string}
                />
              )}
              {categoryField.type === 'Date' && (
                <DatePicker
                  format="DD MMM 'YY"
                  style={{ width: '100%' }}
                  value={data.value && data.value.length > 0 ? moment(Number(data.value)) : undefined}
                  allowClear={false}
                  onChange={(changedDate) => {
                    onFieldValueChange(changedDate?.valueOf().toString() ?? '');
                  }}
                />
              )}
            </Form.Item>
          </React.Fragment>
        );
      })}
    </Form>
  );
};

export default InventoryItemForm;
