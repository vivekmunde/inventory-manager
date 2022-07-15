import React, { lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import AppOverlaySpinner from '../../components/app-overlay-spinner';
import ErrorBoundary from '../../components/error-boundary';

const AddCategory = lazy(() => import('../add-category'));
const EditCategory = lazy(() => import('../edit-category'));

const CategoriesRoutes: React.ComponentType = () => {
  const { url } = useRouteMatch();

  return (
    <ErrorBoundary>
      <React.Suspense fallback={<AppOverlaySpinner />}>
        <Switch>
          <Route exact path={`${url}/add-category`}>
            <AddCategory goBackUrl={url} />
          </Route>
          <Route exact path={`${url}/:categoryId/edit-category`}>
            <EditCategory goBackUrl={url} />
          </Route>
        </Switch>
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default CategoriesRoutes;
