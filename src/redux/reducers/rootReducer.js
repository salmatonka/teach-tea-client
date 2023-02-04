import {combineReducers} from 'redux';
import { filterReducer } from './filterReducers';
import serviceReducer from './serviceReducer';
const rootReducer = combineReducers({
    service : serviceReducer,
    filter : filterReducer,
})
export default rootReducer;