import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import AdminUserListScreen from './screens/AdminUserListScreen';
import AdminUserEditScreen from './screens/AdminUserEditScreen';
import AdminProductListScreen from './screens/AdminProductListScreen';
import AdminProductEditScreen from './screens/AdminProductEditScreen';
import AdminOrderListScreen from './screens/AdminOrderListScreen';
import AdminOrderScreen from './screens/AdminOrderScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentMethodScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={AdminUserListScreen} />
          <Route path='/admin/order/:id' component={AdminOrderScreen} />
          <Route path='/admin/orderlist' component={AdminOrderListScreen} />
          <Route path='/admin/productlist' component={AdminProductListScreen} />
          <Route path='/admin/user/:id/edit' component={AdminUserEditScreen} />
          <Route path='/admin/product/:id/edit' component={AdminProductEditScreen} />
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
