import { Button, Drawer, Typography } from 'antd';
import React, { useState } from 'react';

import { CloseOutlined } from '@ant-design/icons';

import CategoryForm from '../../components/category-form';
import { TCategoryFormInput } from '../../components/category-form/types';
import { convertCategoryFormInputToCategoryInput } from '../../components/category-form/utils';
import useDispatchAddCategory from '../../redux/use-dispatch-add-category';
import { getInitialValues } from './get-initial-values';
import RouterDrawer from '../../components/router-drawer';

const AddCategory: React.FC<{ goBackUrl: string }> = ({ goBackUrl }) => {
  const dispatchAddCategory = useDispatchAddCategory();

  const [formValues, setFormValues] = useState<TCategoryFormInput>(getInitialValues());

  return (
    <RouterDrawer goBackUrl={goBackUrl}>
      {(drawerProps, onToggle) => {
        const onSubmit = () => {
          dispatchAddCategory(convertCategoryFormInputToCategoryInput(formValues));
          onToggle(false);
        };

        return (
          <Drawer
            {...drawerProps}
            title={(
              <div className="flex flex-row justify-between items-center">
                <Typography.Text strong>
                  Add Category
                </Typography.Text>
                <Button
                  type="text"
                  icon={<CloseOutlined />}
                  onClick={() => onToggle(false)}
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
          >
            <CategoryForm
              values={formValues}
              onChange={(changedValues) => {
                setFormValues(changedValues);
              }}
            />
          </Drawer>
        );
      }}
    </RouterDrawer>
  );
};

export default AddCategory;
