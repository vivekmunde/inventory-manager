import { Button, Card, Col, Result, Row, Typography } from 'antd';
import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { BulbOutlined } from '@ant-design/icons';

import ScreenHeader from '../../components/screen-header';
import { TState } from '../../redux/types';
import { TCategory } from '../../types';
import AddInventoryItemButton from './add-inventory-item-button';
import InventoryItemList from './inventory-list';
import InventoryRoutes from './routes';

const Inventory: React.FC = () => {
  const categories = useSelector<TState, TCategory[]>((state) => state.categories, shallowEqual);

  return (
    <div>
      <ScreenHeader>
        <Row>
          <Col xs={24} sm={24} md={12}>
            <Typography.Title>Inventory</Typography.Title>
          </Col>
          <Col xs={24} sm={24} md={12} className="flex flex-row justify-end items-center">
            {categories.length > 0 && <AddInventoryItemButton categories={categories} />}
          </Col>
        </Row>
      </ScreenHeader>
      {categories.length === 0
        ? (
          <Card className="box-shadow">
            <Result
              icon={<BulbOutlined />}
              title="Categories are the core classification of the Inventory!"
              subTitle="Please add a category first to start managing your inventory."
              extra={[
                <Link to="/categories/add-category" key="add-category">
                  <Button type="primary">
                    Add a Category
                  </Button>
                </Link>
              ]}
            />
          </Card>
        )
        : (
          <React.Fragment>
            <InventoryItemList />
            <InventoryRoutes />
          </React.Fragment>
        )}
    </div>
  );
};

export default Inventory;
