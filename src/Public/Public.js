import React from 'react';
import {Route, Routes} from 'react-router-dom';
/* Auth Page */
import Login from './Components/Account/Login/Login';
import Register from './Components/Account/Register/Register';
import ForgotPassword from "./Components/Account/ForgotPassword/ForgotPassword";
import ChangePassword from "./Components/Account/ForgotPassword/ChangePassword";
/* Main Page */
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/AboutUs/About';
import ProductList from './Components/Shop/ProductList/ProductList';
import ProductDetail from './Components/Shop/ProductDetail/ProductDetail';
import Result from './Components/Shop/Result/Result';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import ConfirmCheckout from './Components/Checkout/ConfirmCheckout';
import ThanksYou from './Components/ThanksYou/ThanksYou';
import NewsList from './Components/News/NewsList/NewsList';
import NewsDetail from './Components/News/NewsDetail/NewsDetail';
/* User Page */
import Profile from './Components/Profile/Profile';
/* My Order */
import ListMyOrder from './Components/Profile/MyOrder/ListOrder/ListOrder';
import DetailMyOrder from './Components/Profile/MyOrder/DetailOrder/DetailOrder';
import ListProductFavourite from './Components/Profile/ProductFavourite/ListProductFavourite';
/* Error Page */
import NotFound from "./Components/Shared/Error/Error404";
import ComingSoon from "./Components/Shared/ComingSoon/ComingSoon";
/* Admin Page */
import Dashboard from './Components/AdminApp/Dashboard/Dashboard';

function Public() {
    return (
        <div>
            <Routes>
                {/* Auth Page */}
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/forgot-password' element={<ForgotPassword/>}/>
                <Route path='/change-password' element={<ChangePassword/>}/>
                {/* Error Page */}
                <Route path='/not-found' element={<NotFound/>}/>
                <Route path='/coming-soon' element={<ComingSoon/>}/>
                {/* Client Page */}
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about-us' element={<About/>}/>
                <Route path='/products' element={<ProductList/>}/>
                <Route path='/products/:id' element={<ProductDetail/>}/>
                <Route path='/news-event' element={<NewsList/>}/>
                <Route path='/news-event/:id' element={<NewsDetail/>}/>
                <Route path='/products/search' element={<Result/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/payment-confirm' element={<ConfirmCheckout/>}/>
                <Route path='/thanks-you' element={<ThanksYou/>}/>
                {/* Client Auth Page */}
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/my-order' element={<ListMyOrder/>}/>
                <Route path='/my-order/:id' element={<DetailMyOrder/>}/>
                <Route path='/product-favourites' element={<ListProductFavourite/>}/>
                {/* Admin Page */}
                <Route path='/admin/dashboard' element={<Dashboard/>}/>
            </Routes>
        </div>
    )
}

export default Public
