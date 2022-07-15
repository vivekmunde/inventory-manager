import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { TState } from '../../redux/types';
import { TCategory } from '../../types';

const Navigation: React.FC = () => {
  const routeLocation = useLocation();
  const categories = useSelector<TState, TCategory[]>((state) => state.categories, shallowEqual);

  const linkClassName = (path: string) => {
    return `p-1 ${routeLocation.pathname.indexOf(path) > -1 ? '' : 'z-grey-4'}`;
  };

  return (
    <nav className="p-2 flex flex-col">
      <Link to="/" className={linkClassName('/')}>
        Inventory
      </Link>
      <Link to="/categories" className={linkClassName('/categories')}>
        Categories
      </Link>
      {categories.map((category) => (
        <Link key={category.id} to={`/inventory/${category.id}`} className={linkClassName(`/inventory/${category.id}`)}>
          {category.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
