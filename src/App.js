import React, { lazy, Suspense } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import LayoutDashboard from 'layout/LayoutDashboard';
import CampaignView from 'modules/campaign/CampaignView';
import StartCampaignPage from 'pages/StartCampaignPage';
import { Routes, Route } from 'react-router-dom';

const customStyles = {
  content: {},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
Modal.defaultStyles = {};

const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const CampaignPage = lazy(() => import('./pages/CampaignPage'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
