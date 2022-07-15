import { Button, Drawer, Typography } from 'antd';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { CloseOutlined } from '@ant-design/icons';

import CategoryForm from '../../components/category-form';
import { TCategoryFormInput } from '../../components/category-form/types';
import { convertCategoryFormInputToCategoryInput } from '../../components/category-form/utils';
import useDispatchAddCategory from '../../redux/use-dispatch-add-category';

const getInitialValues = () => {
  const uiKey = nanoid();
  const initialValues: TCategoryFormInput = {
    title: '',
    fields: [{ id: undefined, uiKey, type: 'ShortText', title: 'Model' }],
    fieldTitleUiKey: uiKey,
  };
  return initialValues;
};

const AddCategory: React.FC<{ goBackUrl: string }> = ({ goBackUrl }) => {
  const history = useHistory();
  const dispatchAddCategory = useDispatchAddCategory();
  const [visible, setVisible] = useState(false);
  const [formValues, setFormValues] = useState<TCategoryFormInput>(getInitialValues());

  const onSubmit = () => {
    console.log(convertCategoryFormInputToCategoryInput(formValues));
    dispatchAddCategory(convertCategoryFormInputToCategoryInput(formValues));
    setVisible(false);
  };

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Drawer
      visible={visible}
      placement="right"
      closable={false}
      maskClosable={false}
      push={false}
      destroyOnClose
      width="auto"
      title={(
        <div className="flex flex-row justify-between items-center">
          <Typography.Text strong>
            Add Category
          </Typography.Text>
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={() => setVisible(false)}
          />
        </div>
      )}
      footer={(
        <div className="flex flex-row justify-end">
          <Button
            type="primary"
            onClick={() => {
              onSubmit();
            }}
          >
            Add
          </Button>
        </div>
      )}
      onClose={() => {
        setVisible(false);
      }}
      afterVisibleChange={(visibility) => {
        if (!visibility) {
          history.push(goBackUrl);
        }
      }}>
      <CategoryForm
        values={formValues}
        onChange={(changedValues) => {
          setFormValues(changedValues);
        }}
      />
    </Drawer>
  );
};

export default AddCategory;
