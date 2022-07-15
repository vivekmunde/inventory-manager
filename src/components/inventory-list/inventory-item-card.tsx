import { Card, Descriptions, Space, Typography } from 'antd';
import moment from 'moment';
import React from 'react';

import { TCategory, TInventoryItem } from '../../types';
import EditInventoryItemButton from './edit-inventory-item-button';

const InventoryItemCard: React.FC<{
  category: TCategory;
  inventoryItem: TInventoryItem;
}> = ({ category, inventoryItem }) => (
  <Card size="small" className="mb-4">
    <Descriptions
      layout="vertical"
      size="small"
      colon={false}
    >
      <Descriptions.Item
        label={(
          <Typography.Text type="secondary">
            Category
          </Typography.Text>
        )}
      >
        {category.title}
      </Descriptions.Item>
      {category.fields.map((categoryField) => {
        const data = inventoryItem.data.find((itemData) => itemData.categoryFieldId === categoryField.id);

        if (!data) {
          return null;
        }

        let value = '';
        if (categoryField.type === 'Date' && data.value) {
          try {
            value = moment(Number(data.value)).format("DD MMM 'YY");
          } catch (err) {
            console.error(err);
          }
        } else {
          value = data.value;
        }

        return (
          <Descriptions.Item
            key={categoryField.id}
            label={(
              <Typography.Text type="secondary">
                {categoryField.title}
              </Typography.Text>
            )}
          >
            {value}
          </Descriptions.Item>
        );
      })}
    </Descriptions>
    <Space className="mt-1" direction="horizontal" size="small">
      <EditInventoryItemButton inventoryItemId={inventoryItem.id} />
      {/* <DeleteInventoryItemButton categoryId={category.id} /> */}
    </Space>
  </Card>
);

export default React.memo(InventoryItemCard);
