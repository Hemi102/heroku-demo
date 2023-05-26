import React, {Fragment} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {getBreadcrumbs} from 'utils/common';

const BreadcrumbTrail = () => {
  const {pathname} = useLocation();
  const breadcrumbs = getBreadcrumbs(pathname);

  return (
    <div className="linkk-otr">
      {breadcrumbs.map(({name, route}, i) => (
        <Fragment key={name + i}>
          <p key={name} className="page-linkk heading-xsb">
            <NavLink to={route}>{name}</NavLink>
          </p>
          {i !== breadcrumbs.length - 1 ? <p>/</p> : ''}
        </Fragment>
      ))}
    </div>
  );
};

export default BreadcrumbTrail;
