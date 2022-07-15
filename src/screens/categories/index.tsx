import { Col, Row, Typography } from 'antd';
import React from 'react';

import AddCategoryButton from './add-category-button';
import CategoryList from './category-list';
import CategoriesRoutes from './routes';

const Categories: React.FC = () => {
  return (
    <div>
      <div className="pb-4">
        <Row>
          <Col xs={24} sm={24} md={12}>
            <Typography.Title>Categories</Typography.Title>
          </Col>
          <Col xs={24} sm={24} md={12} className="flex flex-row justify-end items-center">
            <AddCategoryButton />
          </Col>
        </Row>
      </div>
      <CategoryList />
      <CategoriesRoutes />
    </div>
  );
};

export default Categories;
