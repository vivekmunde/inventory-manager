import React, { lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AppOverlaySpinner from '../../components/app-overlay-spinner';
import ErrorBoundary from '../../components/error-boundary';

const AddInventoryItem = lazy(() => import('../add-inventory-item'));

const InventoryRoutes: React.ComponentType = () => {
  const { url } = useRouteMatch();

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<AppOverlaySpinner />}>
        <Switch>
          <Route exact path={`${url}/:categoryId/add-item`}>
            <AddInventoryItem goBackUrl={url} />
          </Route>
        </Switch>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default InventoryRoutes;
