import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar/Navbar';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Banner from './component/Banner/Banner';
import Categories from './component/Categories/Categories';
import Footer from './component/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import DashBoard from './Pages/DashBoard/DashBoard';
import AddProduct from './Pages/DashBoard/AddProduct/AddProduct';
import ManageProduct from './Pages/DashBoard/ManageProduct/ManageProduct';
import navbar from './component/Navbar/Navbar'
import CheckOut from './component/Checkout/Checkout';
import Shipment from './component/Shipment/Shipment';
import OrderList from './component/OrderList/OrderList';

export const userContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({})
  return (
    <userContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
       <Switch>
         <Route exact path="/">
            <HomePage></HomePage>
         </Route>
         <Route path="/home">
           <HomePage></HomePage>
         </Route>
         <Route path="/dashboard">
            <DashBoard></DashBoard>
         </Route>
         <Route path="/addProduct">
           <AddProduct></AddProduct>
         </Route>
         <Route path="/manageProduct">
           <ManageProduct></ManageProduct>
         </Route>
         <Route path="/checkout/:id">
           <Navbar/>
           <CheckOut></CheckOut>
         </Route>
         <Route path="/shipment">
             <Shipment></Shipment>
           </Route>
           <Route path="/orderList">
             <OrderList></OrderList>
           </Route>
       </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
