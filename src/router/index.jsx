import { createBrowserRouter } from 'react-router-dom';
import Login from '../view/Login';
import Layout from '../view/Layout';
import FoodChek from '../view/FoodChek';
import FoodOrder from '../view/FoodOrder';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        path: '/foodchek',
        element: <FoodChek />,
      },
      {
        path: '/foodorder',
        element: <FoodOrder />,
      },
    ],
  },
]);
export default router;
