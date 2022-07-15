import { Card, Result } from 'antd';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { BulbOutlined } from '@ant-design/icons';

import InventoryItemCard from '../../components/inventory-list/inventory-item-card';
import { TState } from '../../redux/types';
import { TCategory, TInventoryItem } from '../../types';

const InventoryItemList: React.FC<{ category: TCategory }> = ({ category }) => {
  const inventoryItems = useSelector<TState, TInventoryItem[]>(
    (state) => state.inventoryItems.filter((inventoryItem) => inventoryItem.categoryId === category.id),
    shallowEqual,
  );

  if (inventoryItems.length > 0) {
    return (
      <div>
        {inventoryItems.map((inventoryItem) => (
          <InventoryItemCard
            key={inventoryItem.id}
            category={category}
            inventoryItem={inventoryItem}
          />
        ))}
      </div>
    );
  }

  return (
    <Card className="box-shadow">
      <Result
        icon={<BulbOutlined />}
        title={`Start managing ${category.title}!`}
        subTitle="Please start adding our inventory items."
      />
    </Card>
  );
};

export default React.memo(InventoryItemList);
