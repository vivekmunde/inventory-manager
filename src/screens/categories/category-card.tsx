import { Card, Descriptions, Space, Typography } from 'antd';
import React from 'react';

import { fieldTypeTranslations } from '../../translations';
import { TCategory } from '../../types';
import DeleteCategoryButton from './delete-category-button';
import EditCategoryButton from './edit-category-button';

const CategoryCard: React.FC<{ category: TCategory }> = ({ category }) => (
  <Card size="small" className="mb-4">
    <Descriptions
      layout="vertical"
      size="small"
      colon={false}
    >
      <Descriptions.Item label={<Typography.Text type="secondary">Category title</Typography.Text>}>
        {category.title}
      </Descriptions.Item>
      <Descriptions.Item label={<Typography.Text type="secondary">Field title</Typography.Text>}>
        {category.fields.find((it) => it.id === category.fieldTitleId)?.title}
      </Descriptions.Item>
      {category.fields.map((it) => (
        <Descriptions.Item key={it.id} label={<Typography.Text type="secondary">{it.title}</Typography.Text>}>
          {fieldTypeTranslations.find((trans) => trans.type === it.type)?.label}
        </Descriptions.Item>
      ))}
    </Descriptions>
    <Space className="mt-1" direction="horizontal" size="small">
      <EditCategoryButton categoryId={category.id} />
      <DeleteCategoryButton categoryId={category.id} />
    </Space>
  </Card>
);

export default React.memo(CategoryCard);
