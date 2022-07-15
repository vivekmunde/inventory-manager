import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const routeLocation = useLocation();

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
    </nav>
  );
};

export default Navigation;
