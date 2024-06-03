import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubscriptionPage from './pages/SubscriptionPage';
import GetLicensePage from './pages/GetLicensePage';

const router = createBrowserRouter( [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pricing",
    element: <SubscriptionPage />,
    children: [
      {
        path: "license",
        element: <GetLicensePage />,
      },
    ],
  },
] );

function App ()
{
  return (
    <RouterProvider router={ router } />
  );
}

export default App;
