import { nanoid } from 'nanoid';
import React from 'react';

import { TInventoryItemFieldFormInput } from '../types';
import AddField from './add-field';
import Field from './field';

const Fields: React.FC<{
  value: TInventoryItemFieldFormInput[];
  onChange: (value: TInventoryItemFieldFormInput[]) => void;
}> = ({ value, onChange }) => {
  const onFieldChange = (changedField: TInventoryItemFieldFormInput) => {
    const indexOfChangedField = value.findIndex((it) => it.uiKey === changedField.uiKey);
    if (indexOfChangedField > -1) {
      value.splice(indexOfChangedField, 1, changedField);
      onChange([...value]);
    }
  };

  const onFieldDelete = (deletedField: TInventoryItemFieldFormInput) => {
    onChange(value.filter((it) => it.uiKey !== deletedField.uiKey));
  };

  return (
    <React.Fragment>
      {value.map((it) => (
        <Field
          key={it.uiKey}
          value={it}
          canDelete={value.length > 1}
          onChange={onFieldChange}
          onDelete={onFieldDelete}
        />
      ))}
      <AddField
        onAdd={() => {
          onChange([...value, { id: undefined, uiKey: nanoid(), title: '', type: 'ShortText' }]);
        }}
      />
    </React.Fragment>
  );
};

export default Fields;
