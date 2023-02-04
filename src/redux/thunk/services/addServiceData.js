import React from 'react';
import { addService } from '../../actionCreators/serviceActions';

const addServiceData = ({service}) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/service", {
          method: "POST",
          body: JSON.stringify(service),
          headers: {
            "Content-type": "application/json",
          },
        });
        const data = await res.json();
    
        if (data.acknowledged) {
          dispatch(
            addService({
              _id: data.insertedId,
              ...service,
            })
          );
        }
      };
    };
    

export default addServiceData;