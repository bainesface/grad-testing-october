import React from 'react';
import { Link, Location } from '@reach/router';
import { routes } from './routes';

const transformPathname = (pathname) =>
  routes.slice(0).reduce((acc, route) => {
    const parentMatch = route.path === pathname.slice(1);
    const leafMatch = route.items.find(
      (item) => item.path === pathname.slice(1)
    );

    if (!leafMatch && !parentMatch) {
      return acc;
    }

    if (parentMatch) {
      return [route];
    }

    return [{ ...route }, leafMatch];
  }, []);

export const Breadcrumbs = () => (
  <Location>
    {({ location: { pathname } }) => (
      <div className="breadcrumbs">
        <div className="breadcrumbs__content">
          <div>
            <Link
              to="/"
              className={`breadcrumbs__link ${
                pathname === '/' ? 'breadcrumbs__link--current' : ''
              }`}
            >
              Home
            </Link>
            {transformPathname(pathname).map(({ path, name }) => (
              <Link
                key={path}
                to={path}
                className={`breadcrumbs__link ${
                  pathname.slice(1) === path ? 'breadcrumbs__link--current' : ''
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="brand-text">TDD Workshop</div>
        </div>
      </div>
    )}
  </Location>
);
