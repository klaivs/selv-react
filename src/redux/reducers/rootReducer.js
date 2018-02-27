import { combineReducers } from 'redux';

//import { authentication } from './authentication.reducer';
//import { registration } from './registration.reducer';
import { articles } from './articleReducer';
import { msg } from './msgReducer';

const rootReducer = combineReducers({
  //authentication,
  //registration,
  articles,
  msg
});

export default rootReducer;