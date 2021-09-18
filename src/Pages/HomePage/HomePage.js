import React from 'react';
import Banner from '../../component/Banner/Banner';
import Categories from '../../component/Categories/Categories';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import ProductDetails from '../../component/ProductDetails/ProductDetails';
import ShowProduct from '../../component/ShowProduct/ShowProduct';

const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
            <ShowProduct></ShowProduct>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;