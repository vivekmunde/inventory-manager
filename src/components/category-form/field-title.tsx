import { Form, Select } from 'antd';
import React from 'react';

import { TInventoryItemFieldFormInput } from './types';

const FieldTitle: React.FC<{
  fields: TInventoryItemFieldFormInput[];
  value: string;
  onChange: (value: string) => void;
}> = ({ fields, value, onChange }) => {
  return (
    <Form.Item label="Field title">
      <Select
        defaultValue={value}
        value={value}
        onChange={(changedFieldTitleUiKey) => {
          onChange(changedFieldTitleUiKey);
        }}
      >
        {fields.map((field) => (
          <Select.Option key={field.uiKey} value={field.uiKey}>{field.title}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default FieldTitle;
