import React from 'react';
import { removeService } from '../../actionCreators/serviceActions';

const deleteService = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/service/${id}`, {
          
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
    
        if (data.acknowledged) {
          dispatch(removeService(id));
        }
      };
    };;

export default deleteService;