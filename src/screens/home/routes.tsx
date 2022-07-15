import React, { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import AppOverlaySpinner from '../../components/app-overlay-spinner';
import ErrorBoundary from '../../components/error-boundary';

const Categories = lazy(() => import('../categories'));
const Inventory = lazy(() => import('../inventory'));
const InventoryByCategory = lazy(() => import('../inventory-by-category'));

const HomeRoutes: React.ComponentType = () => (
  <ErrorBoundary>
    <React.Suspense fallback={<AppOverlaySpinner />}>
      <Switch>
        <Route path={`${process.env.REACT_APP_BASE_PATH}inventory/:categoryId`}>
          <InventoryByCategory />
        </Route>
        <Route path={`${process.env.REACT_APP_BASE_PATH}categories`}>
          <Categories />
        </Route>
        <Route path={`${process.env.REACT_APP_BASE_PATH}home`}>
          <Inventory />
        </Route>
        <Redirect exact from={`${process.env.REACT_APP_BASE_PATH}`} to={`${process.env.REACT_APP_BASE_PATH}home`} />
        <Redirect path="*" to={`${process.env.REACT_APP_BASE_PATH}home`} />
      </Switch>
    </React.Suspense>
  </ErrorBoundary>
);

export default HomeRoutes;
