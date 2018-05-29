import { combineReducers } from 'redux';

import { articles } from './articleReducer';
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
  toastr: toastrReducer,
  articles
});

export default rootReducer;