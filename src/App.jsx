import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoadingSpinner from './components/LoadingSpinner';
import InstallProvider from './context/InstallProvider';
import MainLayout from './layouts/MainLayout';

const Home = lazy(() => import('./pages/Home'));
const AllApps = lazy(() => import('./pages/AllApps'));
const AppDetails = lazy(() => import('./pages/AppDetails'));
const MyInstallation = lazy(() => import('./pages/MyInstallation'));
const NotFound = lazy(() => import('./pages/NotFound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'apps', element: <AllApps /> },
      { path: 'app/:id', element: <AppDetails /> },
      { path: 'installation', element: <MyInstallation /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <InstallProvider>
      <Toaster position="top-right" />
      <Suspense fallback={<LoadingSpinner label="Loading page..." />}>
        <RouterProvider router={router} />
      </Suspense>
    </InstallProvider>
  );
}

export default App;
