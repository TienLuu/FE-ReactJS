import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import ListProduct from "./ListProduct";
import Promotion from "./Promotion";

export default function electronics () {
    return (
        <div className="bg-dark">
            <Header />
            <Carousel />
            <ListProduct itemType="smartphone" />
            <ListProduct itemType="laptop" />
            <Promotion />
        </div>
    ); 
}