import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { TState } from '../../redux/types';
import { TCategory } from '../../types';
import CategoryCard from './category-card';

const CategoryList: React.FC = () => {
  const categories = useSelector<TState, TCategory[]>((state) => state.categories, shallowEqual);

  return (
    <div>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default React.memo(CategoryList);
