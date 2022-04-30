import React from 'react';
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";


const Home = () =>{
    return(
        <div>
            <Login/>
            <Register/>
            <Navbar/>
            <Announcement/>
            <Slider />
            <Categories />
            <Cart/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home;