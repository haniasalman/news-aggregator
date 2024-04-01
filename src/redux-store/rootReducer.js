import { combineReducers } from 'redux';
import newsReducer from '../redux-store/NewsApiOrg/reducer';
import nytReducer from './NewYorkTimes/reducer';
import guardianReducer from './TheGuardian/reducer';

const rootReducer = combineReducers({
  newsReducer,
  nytReducer,
  guardianReducer,
});

export default rootReducer;
