import orderBy from 'lodash/orderBy';
import { Card, Result } from 'antd';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { BulbOutlined } from '@ant-design/icons';

import { TState } from '../../redux/types';
import { TCategory } from '../../types';
import CategoryCard from './category-card';

const sortCategories = (list: TCategory[]) => (
  orderBy(list, [(it) => it.title?.toLowerCase()], ['asc'])
);

const CategoryList: React.FC = () => {
  const categories = useSelector<TState, TCategory[]>((state) => state.categories, shallowEqual);

  if (categories.length > 0) {
    return (
      <div>
        {sortCategories(categories).map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    );
  }

  return (
    <Card className="box-shadow">
      <Result
        icon={<BulbOutlined />}
        title="Categories are the core classification of the Inventory!"
        subTitle="Please add a category to start managing your inventory."
      />
    </Card>
  );
};

export default React.memo(CategoryList);
