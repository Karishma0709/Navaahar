import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';
import ContactUs from '../components/ContactUs';
import Gallery from '../components/Gallery';
import Product from '../components/Products';
import AboutUs from '../components/AboutUs';
import CareerPage from '../components/CareerPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'contact',
        element: <ContactUs/>,
      },
      {
        path: 'gallery',
        element: <Gallery/>,
      },
      {
        path: 'product',
        element: <Product/>,
      },
      {
        path: 'about',
        element: <AboutUs/>,
      },
      {
        path: 'career',
        element: <CareerPage/>,
      },
    
     
    ],
  },
]);
