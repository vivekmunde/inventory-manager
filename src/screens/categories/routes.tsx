import React, { lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AppOverlaySpinner from '../../components/app-overlay-spinner';
import ErrorBoundary from '../../components/error-boundary';

const AddCategory = lazy(() => import('../add-category'));

const CategoriesRoutes: React.ComponentType = () => {
  const { url } = useRouteMatch();

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<AppOverlaySpinner />}>
        <Switch>
          <Route path={`${url}/add-category`}>
            <AddCategory goBackUrl={url} />
          </Route>
        </Switch>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default CategoriesRoutes;
