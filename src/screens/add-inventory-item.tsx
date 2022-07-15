import { Button, Drawer, Typography } from 'antd';
import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CloseOutlined } from '@ant-design/icons';

import InventoryItemForm from '../components/inventory-item-form';
import RouterDrawer from '../components/router-drawer';
import { TState } from '../redux/types';
import useDispatchAddInventoryItem from '../redux/use-dispatch-add-inventory-item';
import { TCategory, TInventoryItemField } from '../types';

const AddInventoryItem: React.FC<{ goBackUrl: string }> = ({ goBackUrl }) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = useSelector<TState, TCategory | undefined | null>(
    (state) => state.categories.find((it) => it.id === categoryId),
    shallowEqual,
  );
  const dispatchAddInventoryItem = useDispatchAddInventoryItem();

  const [formValues, setFormValues] = useState<TInventoryItemField[]>(
    (category?.fields ?? []).map((categoryField) => ({
      categoryFieldId: categoryField.id,
      value: '',
    }))
  );

  return (
    <RouterDrawer goBackUrl={goBackUrl}>
      {(drawerProps, onToggle) => {
        const onSubmit = () => {
          dispatchAddInventoryItem({ categoryId, data: formValues });
          onToggle(false);
        };

        return (
          <Drawer
            {...drawerProps}
            title={(
              <div className="flex flex-row justify-between items-center">
                <Typography.Text strong>
                  Add {category?.title}
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
            {category
              ? (
                <InventoryItemForm
                  values={formValues}
                  category={category}
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

export default AddInventoryItem;
