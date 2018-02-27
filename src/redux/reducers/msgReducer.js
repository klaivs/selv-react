import { msgConstants } from '../actions/actionConstants';
 
export function msg(state = {}, action) {
  switch (action.type) {
    case msgConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case msgConstants.ERROR:
      return {
        type: 'alert-danger',
        message: action.message
      };
    case msgConstants.CLEAR:
      return {};
    default:
      return state
  }
}