import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Login from './pages/Login';

import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />

        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList />} />
          <Route path="cities" element={<CityList />} />
          <Route path="countries" element={<p>List of countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
