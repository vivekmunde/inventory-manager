import { Layout, Typography } from 'antd';
import React from 'react';

import Navigation from './navigation';
import HomeRoutes from './routes';

const Home: React.FC = () => (
  <Layout className="bg-transparent" style={{ minHeight: '100vh' }}>
    <Layout.Sider
      className="border-split-r bg-grey-3"
      theme="light"
      breakpoint="lg"
      collapsedWidth="0">
      <Typography.Title level={2} className="m-4">Invento</Typography.Title>
      <Navigation />
    </Layout.Sider>
    <div style={{ height: '100vh', flex: 1, overflow: 'auto' }}>
      <HomeRoutes />
    </div>
  </Layout>
);

export default Home;
