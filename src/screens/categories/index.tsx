import { Col, Row, Typography } from 'antd';
import React from 'react';

import ScreenHeader from '../../components/screen-header';
import AddCategoryButton from './add-category-button';
import CategoryList from './category-list';
import CategoriesRoutes from './routes';

const Categories: React.FC = () => {
  return (
    <div>
      <ScreenHeader>
        <Row>
          <Col xs={24} sm={24} md={12}>
            <Typography.Title>Categories</Typography.Title>
          </Col>
          <Col xs={24} sm={24} md={12} className="flex flex-row justify-end items-center">
            <AddCategoryButton />
          </Col>
        </Row>
      </ScreenHeader>
      <CategoryList />
      <CategoriesRoutes />
    </div>
  );
};

export default Categories;
