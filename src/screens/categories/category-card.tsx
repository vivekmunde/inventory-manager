import { Card, Descriptions } from 'antd';
import React from 'react';

import { fieldTypeTranslations } from '../../translations';
import { TCategory } from '../../types';
import EditCategoryButton from './edit-category-button';

const CategoryCard: React.FC<{ category: TCategory }> = ({ category }) => (
  <Card size="small">
    <Descriptions
      layout="vertical"
      size="small"
      colon={false}
    >
      <Descriptions.Item label="Category title">
        {category.title}
      </Descriptions.Item>
      <Descriptions.Item label="Field title">
        {category.fields.find((it) => it.id === category.fieldTitleId)?.title}
      </Descriptions.Item>
      {category.fields.map((it) => (
        <Descriptions.Item key={it.id} label={it.title}>
          {fieldTypeTranslations.find((trans) => trans.type === it.type)?.label}
        </Descriptions.Item>
      ))}
    </Descriptions>
    <div className="pt-1">
      <EditCategoryButton categoryId={category.id} />
    </div>
  </Card>
);

export default React.memo(CategoryCard);
