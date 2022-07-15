import { Layout, Typography } from 'antd';
import React from 'react';

import Navigation from './navigation';
import HomeRoutes from './routes';
import styles from './home.module.less';

const Home: React.FC = () => (
  <Layout
    className="bg-transparent"
    style={{ minHeight: '100vh' }}
  >
    <Layout.Sider
      width={296}
      className={`border-split-r bg-grey-3 ${styles.sideNavigation}`}
      theme="light"
      breakpoint="lg"
      collapsedWidth="0">
      <Typography.Title level={2} className="m-4">Invento</Typography.Title>
      <Navigation />
    </Layout.Sider>
    <Layout.Content
      className="p-4"
      style={{ height: '100vh', flex: 1, overflow: 'auto' }}
    >
      <HomeRoutes />
    </Layout.Content>
  </Layout>
);

export default Home;
