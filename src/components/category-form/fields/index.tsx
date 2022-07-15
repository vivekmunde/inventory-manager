import { nanoid } from 'nanoid';
import React from 'react';

import { TCategoryFieldFormInput } from '../types';
import AddField from './add-field';
import Field from './field';

const Fields: React.FC<{
  value: TCategoryFieldFormInput[];
  onChange: (value: TCategoryFieldFormInput[]) => void;
}> = ({ value, onChange }) => {
  const onFieldChange = (changedField: TCategoryFieldFormInput) => {
    const indexOfChangedField = value.findIndex((it) => it.uiKey === changedField.uiKey);
    if (indexOfChangedField > -1) {
      value.splice(indexOfChangedField, 1, changedField);
      onChange([...value]);
    }
  };

  const onFieldDelete = (deletedField: TCategoryFieldFormInput) => {
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
