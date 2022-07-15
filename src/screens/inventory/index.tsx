import { Col, Layout, Row, Typography } from 'antd';
import React from 'react';

import AddInventoryItemButton from './add-inventory-item-button';
import InventoryItemList from '../../components/inventory-list';
import InventoryRoutes from './routes';

const Inventory: React.FC = () => (
  <Layout className="bg-transparent">
    <Layout.Header className="bg-transparent p-4" style={{ height: 'auto' }}>
      <Row>
        <Col xs={24} sm={24} md={12}>
          <Typography.Title>Inventory</Typography.Title>
        </Col>
        <Col xs={24} sm={24} md={12} className="flex flex-row justify-end items-center">
          <AddInventoryItemButton />
        </Col>
      </Row>
    </Layout.Header>
    <Layout.Content className="p-4">
      <InventoryItemList />
      <InventoryRoutes />
    </Layout.Content>
  </Layout>
);

export default Inventory;
