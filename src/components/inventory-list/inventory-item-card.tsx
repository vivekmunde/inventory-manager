import { Card, Descriptions, Space, Typography } from 'antd';
import moment from 'moment';
import React from 'react';

import { TCategory, TInventoryItem } from '../../types';
import DeleteInventoryButton from './delete-inventory-item-button';
import EditInventoryItemButton from './edit-inventory-item-button';

const InventoryItemCard: React.FC<{
  category: TCategory;
  inventoryItem: TInventoryItem;
  showCategory?: boolean;
}> = ({ category, inventoryItem, showCategory }) => (
  <Card size="small" className="mb-4 box-shadow">
    <Descriptions
      layout="vertical"
      size="small"
      colon={false}
      column={{ xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
    >
      {showCategory && (
        <Descriptions.Item
          label={(
            <Typography.Text type="secondary">
              Category
            </Typography.Text>
          )}
        >
          {category.title}
        </Descriptions.Item>
      )}
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
            span={categoryField.type === 'LongText' ? 2 : 1}
          >
            {(value ?? '').length > 0 ? value : 'Not available'}
          </Descriptions.Item>
        );
      })}
    </Descriptions>
    <Space className="mt-1" direction="horizontal" size="small">
      <EditInventoryItemButton inventoryItemId={inventoryItem.id} />
      <DeleteInventoryButton inventoryItemId={inventoryItem.id} />
    </Space>
  </Card>
);

export default React.memo(InventoryItemCard);
