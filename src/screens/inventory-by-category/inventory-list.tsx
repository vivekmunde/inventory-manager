import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import InventoryItemCard from '../../components/inventory-list/inventory-item-card';
import { TState } from '../../redux/types';
import { TCategory, TInventoryItem } from '../../types';

const InventoryItemList: React.FC<{ category: TCategory }> = ({ category }) => {
  const inventoryItems = useSelector<TState, TInventoryItem[]>(
    (state) => state.inventoryItems.filter((inventoryItem) => inventoryItem.categoryId === category.id),
    shallowEqual,
  );

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
};

export default React.memo(InventoryItemList);
