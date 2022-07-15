import { Layout, Typography } from 'antd';
import React from 'react';

const Categories: React.FC = () => (
  <Layout className="bg-transparent">
    <Layout.Header className="bg-transparent p-4">
      <Typography.Title level={1}>Inventory</Typography.Title>
    </Layout.Header>
    <Layout.Content className="p-4"></Layout.Content>
    {/*  */}
  </Layout>
);

export default Categories;
