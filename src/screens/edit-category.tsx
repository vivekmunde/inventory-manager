import { Button, Drawer, Typography } from 'antd';
import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CloseOutlined } from '@ant-design/icons';

import CategoryForm from '../components/category-form';
import { TCategoryFormInput } from '../components/category-form/types';
import {
  convertCategoryFormInputToCategoryInput, convertCategoryToCategoryFormInput
} from '../components/category-form/utils';
import RouterDrawer from '../components/router-drawer';
import { TState } from '../redux/types';
import useDispatchUpdateCategory from '../redux/use-dispatch-update-category';
import { TCategory } from '../types';

const EditCategory: React.FC<{ goBackUrl: string }> = ({ goBackUrl }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const dispatchUpdateCategory = useDispatchUpdateCategory();
  const categoryToEdit = useSelector<TState, TCategory | undefined | null>(
    (state) => state.categories.find((it) => it.id === categoryId),
    shallowEqual,
  );

  const [formValues, setFormValues] = useState<TCategoryFormInput | undefined | null>(
    categoryToEdit
      ? convertCategoryToCategoryFormInput(categoryToEdit)
      : undefined
  );

  return (
    <RouterDrawer goBackUrl={goBackUrl}>
      {(drawerProps, onToggle) => {
        const onSubmit = () => {
          if (formValues) {
            dispatchUpdateCategory({
              categoryId,
              categoryInput: convertCategoryFormInputToCategoryInput(formValues),
            });
            onToggle(false);
          }
        };

        return (
          <Drawer
            {...drawerProps}
            title={(
              <div className="flex flex-row justify-between items-center">
                <Typography.Text strong>
                  Edit Category
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
                  Update
                </Button>
              </div>
            )}
          >
            {formValues
              ? (
                <CategoryForm
                  values={formValues}
                  onChange={(changedValues) => {
                    setFormValues(changedValues);
                  }}
                />
              )
              : null}
          </Drawer>
        );
      }}
    </RouterDrawer>
  );
};

export default EditCategory;
