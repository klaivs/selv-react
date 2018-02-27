import { msgConstants } from '../actions/actionConstants';

export function msg(state = { items: [] }, action) {
  switch (action.type) {
    case msgConstants.SUCCESS:
      return {
        ...state,
        items: [...state.items, {
          ...action.message,
          title: "Success",
          className: 'alert alert-success'
        }]
      };
    case msgConstants.ERROR:
    return {
      ...state,
      items: [...state.items, {
        ...action.message,
        title: "Error",
        className: 'alert alert-danger'
      }]
    };
    case msgConstants.CLEAR:
      return {};
    default:
      return state
  }
}