import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     auth: authReducer,
//     project: projectReducer // all info are stored on the state project property , here store on the project property 
// });

// export default rootReducer


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
  });
  
  export default rootReducer