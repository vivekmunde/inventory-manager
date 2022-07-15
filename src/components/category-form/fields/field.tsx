import { Button, Form, Input, Select } from 'antd';
import React from 'react';

import { CloseOutlined } from '@ant-design/icons';

import { fieldTypeTranslations } from '../../../translations';
import { TInventoryItemFieldFormInput } from '../types';

const Field: React.FC<{
  value: TInventoryItemFieldFormInput;
  canDelete: boolean;
  onChange: (value: TInventoryItemFieldFormInput) => void;
  onDelete: (value: TInventoryItemFieldFormInput) => void;
}> = React.memo(
  ({ value, canDelete, onChange, onDelete }) => (
    <Form.Item>
      <Input
        value={value.title as string}
        onChange={(e) => {
          value.title = e.target.value;
          onChange({
            ...value,
            title: e.target.value,
          });
        }}
        addonBefore={(
          <Select
            defaultValue={value.type}
            value={value.type}
            onChange={(changedType) => {
              onChange({
                ...value,
                type: changedType,
              });
            }}
            style={{ minWidth: '120px' }}>
            {fieldTypeTranslations.map((type) => (
              <Select.Option key={type.type} value={type.type}>{type.label}</Select.Option>
            ))}
          </Select>
        )}
        addonAfter={canDelete && (
          <Button
            type="text"
            size="small"
            shape="circle"
            onClick={() => {
              onDelete(value);
            }}
          >
            <CloseOutlined className="font-color-secondary" />
          </Button>
        )}
      />
    </Form.Item>
  )
);

export default Field;
