import { Card, Descriptions } from 'antd';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { TState } from '../../redux/types';
import { fieldTypeTranslations } from '../../translations';
import { TCategory } from '../../types';

const CategoryList: React.FC = () => {
  const categories = useSelector<TState, TCategory[]>((state) => state.categories, shallowEqual);

  return (
    <div className="pt-4">
      {categories.map((category) => (
        <Card key={category.id}>
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
        </Card>
      ))}
    </div>
  );
};

export default CategoryList;
