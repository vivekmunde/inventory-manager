import { Button, Drawer, Typography } from 'antd';
import React, { useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CloseOutlined } from '@ant-design/icons';

import InventoryItemForm from '../components/inventory-item-form';
import RouterDrawer from '../components/router-drawer';
import { TState } from '../redux/types';
import useDispatchUpdateInventoryItem from '../redux/use-dispatch-update-inventory-item';
import { TCategory, TInventoryItem, TInventoryItemField } from '../types';

const EditInventoryItem: React.FC<{ goBackUrl: string }> = ({ goBackUrl }) => {
  const { inventoryItemId } = useParams<{ inventoryItemId: string }>();
  const inventoryItem = useSelector<TState, TInventoryItem | undefined | null>(
    (state) => state.inventoryItems.find((it) => it.id === inventoryItemId),
    shallowEqual,
  );
  const category = useSelector<TState, TCategory | undefined | null>(
    (state) => inventoryItem
      ? state.categories.find((it) => it.id === inventoryItem.categoryId)
      : undefined,
    shallowEqual,
  );
  const dispatchUpdateInventoryItem = useDispatchUpdateInventoryItem();

  const [formValues, setFormValues] = useState<TInventoryItemField[]>(
    (category?.fields ?? []).map((categoryField) => ({
      categoryFieldId: categoryField.id,
      value: inventoryItem?.data.find((inventoryItemDataField) => inventoryItemDataField.categoryFieldId === categoryField.id)?.value ?? '',
    }))
  );

  return (
    <RouterDrawer goBackUrl={goBackUrl}>
      {(drawerProps, onToggle) => {
        const onSubmit = () => {
          dispatchUpdateInventoryItem({ inventoryItemId, inventoryItemData: formValues });
          onToggle(false);
        };

        return (
          <Drawer
            {...drawerProps}
            title={(
              <div className="flex flex-row justify-between items-center">
                <Typography.Text strong>
                  Edit {category?.title}
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

export default EditInventoryItem;
