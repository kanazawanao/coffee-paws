import authApiReducer from 'api/hooks/AuthApi/redux';
import { combineReducers } from 'redux';

const rootReducer = () =>
  combineReducers({
    // hook api
    authApi: authApiReducer,
  });

export default rootReducer;
