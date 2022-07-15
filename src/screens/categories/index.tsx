import { Layout, Typography } from 'antd';
import React from 'react';

import AddCategoryButton from './add-category-button';
import CategoryList from './category-list';
import CategoriesRoutes from './routes';

const Categories: React.FC = () => {
  return (
    <Layout className="bg-transparent">
      <Layout.Header className="bg-transparent p-4 flex flex-row justify-between">
        <Typography.Title>Categories</Typography.Title>
        <AddCategoryButton />
      </Layout.Header>
      <Layout.Content className="p-4">
        <CategoryList />
        <CategoriesRoutes />
      </Layout.Content>
    </Layout>
  );
};

export default Categories;
