import React from 'react';
import {Link} from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actionCreators/serviceActions';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../redux/actionTypes/actionTypes';
const ServiceCarts = ({ service }) => {
  const { _id,title, details, image } = service;

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div className=''>
       {pathname.includes("cart") && (
      <div className='rounded-full  btn btn-xs btn-outline  font-bold'><p>{service.quantity}</p></div>)}

      <div className="card  bg-base-100 shadow-xl">
        <figure className="px-4 pt-6">
          <img src={image} alt="Shoes" className="rounded-xl h-60" />
        </figure>
        <div className="card-body items-center text-center">
          <h3 className="card-title">{title}</h3>
          <p>{details?.slice(0, 80)}</p>


          <div className="card-actions">

            {!pathname.includes("cart") && (
              <Link to={`/serviceDetails/${_id}`}><button className="btn btn-outline">Details</button></Link>)}

            {!pathname.includes("cart") && (
              <button
                onClick={() => dispatch(addToCart(service))}
                className="btn btn-outline "><FaShoppingCart /> Cart</button>
            )}


            {pathname.includes("cart") && (
              <button onClick={() => dispatch(removeFromCart(service))}
                className="btn btn-outline "><RiDeleteBin2Fill /> Remove</button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarts;