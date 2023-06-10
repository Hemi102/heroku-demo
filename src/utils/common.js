import React from 'react';
import {startCase, forEach} from 'lodash';
import {DASHBOARD_PATH} from 'constants/routePaths';
import {useLocation} from 'react-router-dom';

export const getBreadcrumbs = pathname => {
  const urlPath = pathname.split('/');
  const [, ...usablePath] = urlPath;

  let breadCrumbs = [
    {
      name: 'Dashboard',
      route: DASHBOARD_PATH,
    },
  ];
  let fullTrailPath = '/';

  forEach(usablePath, (path, i) => {
    fullTrailPath = fullTrailPath + `${path + (i !== usablePath.length - 1 ? '/' : '')}`;
    if (fullTrailPath !== '/dashboard')
      breadCrumbs.push({
        name: startCase(path),
        route: fullTrailPath,
      });
  });

  // In case of edit path remove the id before edit
  if (pathname.includes('edit')) {
    breadCrumbs.splice(breadCrumbs.length - 2, 1);
  }
  if (pathname.includes('provider-rate-history')) {
    breadCrumbs.splice(breadCrumbs.length - 2, 1);
  }

  return breadCrumbs;
};
export const getAccessToken = () => {
  return localStorage.getItem('access_token');
};
export const setAccessToken = accessToken => {
  return localStorage.setItem('access_token', accessToken);
};
export const setUserInfoInStorage = (userInfo = {}) => {
  return localStorage.setItem('uuInfo', JSON.stringify(userInfo));
};
export function useQuery() {
  const {search} = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export const checkUserLoggedInStatus = loginData => {
  if (loginData?.status_code === 200 || getAccessToken()) {
    return true;
  }

  return false;
};
