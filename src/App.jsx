import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GetLicensePage from './pages/GetLicensePage';

const router = createBrowserRouter( [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/pricing",
    element: <GetLicensePage />,
  },
] );

function App ()
{
  return (
    <RouterProvider router={ router } />
  );
}

export default App;
