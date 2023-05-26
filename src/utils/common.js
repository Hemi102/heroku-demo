import {startCase, forEach} from 'lodash';
import {DASHBOARD_PATH} from 'constants/routePaths';

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
