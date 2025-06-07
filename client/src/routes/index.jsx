import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/Home';
import ContactUs from '../components/ContactUs';
import Gallery from '../components/Gallery';
import Product from '../components/Products';
import AboutUs from '../components/AboutUs';
import CareerPage from '../components/CareerPage';
import ProductDetail from '../components/ProductDetail';
import PrivacyPolicy from '../components/PrivacyPolicy';

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
        path: 'products',
        element: <Product/>,
      },
      {
        path: 'aboutus',
        element: <AboutUs/>,
      },
      {
        path: 'career',
        element: <CareerPage/>,
      },
      {
        path: '/product/:id',
        element: <ProductDetail/>,
      },
        {
        path: '/privacy-policy',
        element: <PrivacyPolicy/>,
      },
     
    ],
  },
]);
