import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import { Dashboard } from '../pages/Dashboard';
// import { Repo } from '../pages/Repos';

const Dashboard = React.lazy(() => import(
  /* webpackPrefetch: true */
  /* webpaclChunkName: Dashboard */ '../pages/Dashboard'))
const Repo = React.lazy(() => import(
  /* webpackPrefetch: true */
  /* webpaclChunkName: Repo */ '../pages/Repos'))

export const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={'Loading...'}>
        <Switch>
          <Route component={Dashboard} path="/" exact />
          <Route component={Repo} path="/repositories/:repository+"/>
        </Switch>
    </React.Suspense>
  )
};
