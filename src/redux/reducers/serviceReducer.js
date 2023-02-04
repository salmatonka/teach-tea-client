import { ADD_SERVICE, ADD_TO_CART, LOAD_SERVICE, REMOVE_FROM_CART, REMOVE_SERVICE } from "../actionTypes/actionTypes";

 const initialState = {
    cart: [],
    services: [],
  };
  const serviceReducer = (state = initialState, action) => {

    const selectedService = state.cart.find(
        (service) => service._id === action.payload._id
    );

    // console.log(selectedService);

    switch (action.type){
      case LOAD_SERVICE:
        return {
            ...state,
            services: action.payload,
    
      }
      case ADD_SERVICE:
        return {
            ...state,
            services: [...state.services,  action.payload],
        };
      case REMOVE_SERVICE:
        return {
            ...state,
            services: state.services.filter((service) => service._id !== action.payload), 
        };
        case ADD_TO_CART:
            if(selectedService){
                const newCart = state.cart.filter((service) => service._id !== selectedService._id);

                selectedService.quantity = selectedService.quantity + 1;
                return {
                    ...state,
                    cart: [ ...newCart.cart, selectedService ],
                } 
            }
            return {
                ...state,
                cart: [ ...state.cart, { ...action.payload, quantity: 1 } ],
            };
        case REMOVE_FROM_CART:
            if(selectedService.quantity > 1){
                const newCart = state.cart.filter((service) => service._id !== selectedService._id);
                
                selectedService.quantity = selectedService.quantity - 1;
                return {
                    ...state,
                    cart: [ ...newCart.cart, selectedService ],
                } 
            }

            return {
                ...state,
        cart: state.cart.filter(
          (service) => service._id !== action.payload._id
        ),
            };
        default:
            return state;
   }
}  
    export default serviceReducer;