import { Card, Result } from 'antd';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { BulbOutlined } from '@ant-design/icons';

import InventoryItemCard from '../../components/inventory-list/inventory-item-card';
import { TState } from '../../redux/types';
import { TCategory, TInventoryItem } from '../../types';

const InventoryItemList: React.FC = () => {
  const categories = useSelector<TState, TCategory[]>((state) => state.categories, shallowEqual);
  const inventoryItems = useSelector<TState, TInventoryItem[]>((state) => state.inventoryItems, shallowEqual);

  if (inventoryItems.length > 0) {
    return (
      <div>
        {inventoryItems.map((inventoryItem) => {
          const category = categories.find((it) => it.id === inventoryItem.categoryId);

          if (category) {
            return (
              <InventoryItemCard
                key={inventoryItem.id}
                category={category}
                inventoryItem={inventoryItem}
              />
            );
          }

          return null;
        })}
      </div>
    );
  }

  return (
    <Card className="box-shadow">
      <Result
        icon={<BulbOutlined />}
        title="Start managing your inventory!"
        subTitle="Please start adding your inventory items."
      />
    </Card>
  );
};

export default React.memo(InventoryItemList);
