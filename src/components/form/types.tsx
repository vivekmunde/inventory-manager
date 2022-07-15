import { FieldProps } from 'formik';
import { FormItemProps } from 'antd/lib/form';

interface IFieldItemProps extends FormItemProps {
  formikField?: FieldProps,
  hasErrorFeedback?: boolean,
  showValidationMessage?: boolean,
}

export default IFieldItemProps;
