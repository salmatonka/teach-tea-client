import { loadService } from "../../actionCreators/serviceActions";

const loadServiceData = () =>{
   return async (dispatch, getState) =>{
    const res = await fetch("http://localhost:5000/services");
    const data = await res.json();

    if (data.length){
        dispatch(loadService(data));
    }
   };
};
export default loadServiceData ;