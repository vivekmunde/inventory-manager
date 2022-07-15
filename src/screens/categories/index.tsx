import { Col, Layout, Row, Typography } from 'antd';
import React from 'react';

import AddCategoryButton from './add-category-button';
import CategoryList from './category-list';
import CategoriesRoutes from './routes';

const Categories: React.FC = () => {
  return (
    <Layout className="bg-transparent">
      <Layout.Header className="bg-transparent p-4" style={{ height: 'auto' }}>
        <Row>
          <Col xs={24} sm={24} md={12}>
            <Typography.Title>Categories</Typography.Title>
          </Col>
          <Col xs={24} sm={24} md={12} className="flex flex-row justify-end items-center">
            <AddCategoryButton />
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content className="p-4">
        <CategoryList />
        <CategoriesRoutes />
      </Layout.Content>
    </Layout>
  );
};

export default Categories;
