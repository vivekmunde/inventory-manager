import React, { FC } from 'react';
import { Form } from 'antd';
import IFieldItemProps from './types';
import get from './get';

const AntDFormItem = Form.Item;

const FieldItem: FC<IFieldItemProps> = ({
  formikField,
  hasErrorFeedback = true,
  showValidationMessage = true,
  ...props
}) => {
  if (formikField) {
    const { field, form } = formikField;
    const touched = !!get(form.touched, field.name);
    const errorMessage = get(form.errors, field.name);
    const touchedError = errorMessage && touched;
    const { hasFeedback, children, ...restProps } = props;

    return (
      <AntDFormItem
        {...restProps}
        hasFeedback={hasFeedback || (hasErrorFeedback && !!touchedError)}
        help={(showValidationMessage && touchedError && typeof errorMessage === 'string') ? errorMessage : null}
        validateStatus={touchedError ? 'error' : 'success'}
      >
        {children}
      </AntDFormItem>
    );
  }

  return (<AntDFormItem {...props} />);
};

export default FieldItem;
