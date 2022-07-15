import { Layout, Typography } from 'antd';
import React from 'react';

import Navigation from './navigation';
import HomeRoutes from './routes';

const Home: React.FC = () => (
  <Layout className="bg-transparent" style={{ minHeight: '100vh' }}>
    <Layout.Sider
      className="border-split-r"
      theme="light"
      breakpoint="lg"
      collapsedWidth="0">
      <Typography.Title level={3} className="m-4">IM</Typography.Title>
      <Navigation />
    </Layout.Sider>
    <div style={{ height: '100vh', flex: 1, overflow: 'auto' }}>
      <HomeRoutes />
    </div>
  </Layout>
);

export default Home;
