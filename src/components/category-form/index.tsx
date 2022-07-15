import { Form, Input } from 'antd';
import React from 'react';

import FieldTitle from './field-title';
import Fields from './fields';
import { TCategoryFormInput } from './types';

const CategoryForm: React.FC<{
  values: TCategoryFormInput,
  onChange: (values: TCategoryFormInput) => void;
}> = ({ values, onChange }) => (
  <Form layout="vertical">
    <Form.Item label="Category title">
      <Input
        value={values.title}
        onChange={(e) => {
          onChange({
            ...values,
            title: e.target.value,
          });
        }}
        type="text"
        placeholder="Category title"
      />
    </Form.Item>
    <FieldTitle
      value={values.fieldTitleUiKey}
      fields={values.fields}
      onChange={(changedFieldTitleUiKey) => {
        onChange({
          ...values,
          fieldTitleUiKey: changedFieldTitleUiKey,
        });
      }}
    />
    <Fields
      value={values.fields}
      onChange={(changedFields) => {
        const isFieldTitleRemovedFromFields = !(changedFields.find((it) => it.uiKey === values.fieldTitleUiKey));
        if (isFieldTitleRemovedFromFields) {
          onChange({
            ...values,
            fields: changedFields,
            fieldTitleUiKey: changedFields[0].uiKey,
          });
        } else {
          onChange({
            ...values,
            fields: changedFields,
          });
        }
      }} />
  </Form>
);

export default CategoryForm;
