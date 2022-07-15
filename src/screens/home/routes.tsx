import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import AppOverlaySpinner from '../../components/app-overlay-spinner';
import ErrorBoundary from '../../components/error-boundary';

const Categories = lazy(() => import('../categories'));
const Inventory = lazy(() => import('../inventory'));
const InventoryByCategory = lazy(() => import('../inventory-by-category'));

const HomeRoutes: React.ComponentType = () => (
  <ErrorBoundary>
    <React.Suspense fallback={<AppOverlaySpinner />}>
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/inventory/:category" element={<InventoryByCategory />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </React.Suspense>
  </ErrorBoundary>
);

export default HomeRoutes;
