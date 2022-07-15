import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import AppOverlaySpinner from '../../components/app-overlay-spinner';
import ErrorBoundary from '../../components/error-boundary';

const Categories = lazy(() => import('../categories'));
const Inventory = lazy(() => import('../inventory'));
const InventoryByCategory = lazy(() => import('../inventory-by-category'));

const HomeRoutes: React.ComponentType = () => (
  <ErrorBoundary>
    <React.Suspense fallback={<AppOverlaySpinner />}>
      <Switch>
        <Route exact path="/">
          <Inventory />
        </Route>
        <Route path="/inventory/:category">
          <InventoryByCategory />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </React.Suspense>
  </ErrorBoundary>
);

export default HomeRoutes;
