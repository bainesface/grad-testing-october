import React from 'react';
import { Link } from '@reach/router';
import { routes } from './routes';

export const buildStage = (route, singleStage) => (
  <li className="stage" key={route.name}>
    <div className="container">
      {singleStage ? (
        <h1>{route.name}</h1>
      ) : (
        <h3 className="mb-0">{route.name}</h3>
      )}
      <ol className="bare-list">
        {route.items.map((item) => (
          <li key={item.name}>
            <Link to={`/${item.path}`} className="stage-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  </li>
);

const getRouteByPathname = (pathname) =>
  routes.find((route) => route.path === pathname);

export const Stage = (props) => (
  <div className="listing">
    <div className="main">
      <div className="container">
        <ol className="bare-list">
          {buildStage(getRouteByPathname(props.path), true)}
        </ol>
      </div>
    </div>
  </div>
);
