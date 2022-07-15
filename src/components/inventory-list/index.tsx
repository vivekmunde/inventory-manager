import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { TState } from '../../redux/types';
import { TCategory, TInventoryItem } from '../../types';
import InventoryItemCard from './inventory-item-card';

const InventoryItemList: React.FC = () => {
  const categories = useSelector<TState, TCategory[]>((state) => state.categories, shallowEqual);
  const inventoryItems = useSelector<TState, TInventoryItem[]>((state) => state.inventoryItems, shallowEqual);

  return (
    <div className="pt-4">
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
};

export default React.memo(InventoryItemList);
