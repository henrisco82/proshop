import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Shipping from './pages/Shipping'
import PlaceOrder from './pages/PlaceOrder'
import Payment from './pages/Payment'
import Order from './pages/Order'
import UserList from './pages/UserList'
import UserEdit from './pages/UserEdit'
import ProductList from './pages/ProductList'
import ProductEdit from './pages/ProductEdit'
import OrderList from './pages/OrderList'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path='/profile' element={<Profile />} />
            <Route path="/cart/:id?" element={<Cart />} />
            <Route path='/shipping' element={<Shipping />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/placeorder' element={<PlaceOrder />} />
            <Route path='/order/:orderId' element={<Order />} />
            <Route path='/admin/userlist' element={<UserList />} />
            <Route path='/admin/user/:userId/edit' element={<UserEdit />} />
            <Route path='/admin/productlist' element={<ProductList />} />
            <Route
              path='/admin/productlist/:pageNumber'
              element={<ProductList />}
            />
            <Route path='/admin/product/:productId/edit' element={<ProductEdit />} />
            <Route path='/admin/orderlist' element={<OrderList />} />
            <Route path='/search/:keyword' element={<Home />} />
            <Route path='/page/:pageNumber' element={<Home />} />
            <Route
              path='/search/:keyword/page/:pageNumber'
              element={<Home />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
