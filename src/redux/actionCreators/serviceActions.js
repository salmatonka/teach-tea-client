import { ADD_SERVICE, ADD_TO_CART, LOAD_SERVICE, REMOVE_FROM_CART, REMOVE_SERVICE, SERVICE_LOADED } from "../actionTypes/actionTypes"

export const loadService = (data) =>{
  return{
    type: LOAD_SERVICE,
    payload: data,
  };
};
export const addService = (data) =>{
  return{
    type: ADD_SERVICE,
    payload: data,
  };
};
export const removeService = (id) =>{
  return{
    type: REMOVE_SERVICE,
    payload: id,
  };
};
export const addToCart = (service) =>{
  return{
    type: ADD_TO_CART,
    payload: service,
  };
};
export const removeFromCart = (service) =>{
  return{
    type: REMOVE_FROM_CART,
    payload: service,
  };
};
export const loaded = (services) =>{
  return{
    type: SERVICE_LOADED,
    payload: services,
  };
};