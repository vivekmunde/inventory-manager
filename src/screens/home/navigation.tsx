import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { TState } from '../../redux/types';
import { TCategory } from '../../types';

const Navigation: React.FC = () => {
  const routeLocation = useLocation();
  const categories = useSelector<TState, TCategory[]>((state) => state.categories, shallowEqual);

  const linkClassName = (path: string) => {
    return `pt-1 pb-1 ${routeLocation.pathname.toLowerCase() === path.toLowerCase() ? 'bold' : 'grey-10'}`;
  };

  return (
    <nav className="p-4 flex flex-col" style={{ overflow: 'auto' }}>
      <div className="p-4 mb-4 flex flex-col bg-grey-1 border-radius">
        <div className="pb-3 grey-6 uppercase">
          Inventory
        </div>
        <Link to="/home" className={linkClassName(`${process.env.REACT_APP_BASE_PATH}home`)}>
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`${process.env.REACT_APP_BASE_PATH}inventory/${category.id}`}
            className={linkClassName(`${process.env.REACT_APP_BASE_PATH}inventory/${category.id}`)}
          >
            {category.title}
          </Link>
        ))}
      </div>
      <div className="mt-4 pt-2 pb-2 pl-4 pr-4 flex flex-col bg-grey-1 border-radius">
        <Link
          to={`${process.env.REACT_APP_BASE_PATH}categories`}
          className={linkClassName(`${process.env.REACT_APP_BASE_PATH}categories`)}
        >
          Categories
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
