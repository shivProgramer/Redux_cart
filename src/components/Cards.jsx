import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './style.css'; 
import { useSelector , useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
const Cards = () => {
const items = useSelector((state)=>state.allcart.items);
const dispatch = useDispatch();
  return (
    <div className="container mt-3">
      <h2 className="text-center"> Add to Cart Projects </h2>
      <div className="row d-flex justify-content-center align-items-center">
        {items.map((element, id) => {
          return (
            <>
              <Card style={{ width: "18rem", border:"none" }} className="mx-2 mt-4 card_style" key={id}>
                <Card.Img variant="top" src={element.imgdata} style={{height: "16rem"}} className="mt-3"/>
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                  Price : ₹ {element.price} 
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                  <Button variant="primary" className="col-lg-12" onClick={()=>dispatch(addToCart(element))} >Add to cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
