import initialState from '../config/initialState';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_VENUES':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_VENUES_SUCCESS':
      return {
        ...state,
        venues: action.venues,
        loading: false,
      };
    case 'FETCH_VENUES_ERROR':
      return {
        ...state,
        venues: {},
        loading: false,
        error: action.error,
      };
    case 'UPDATE_PARAMS':
      return {
        ...state,
        venues: {},
        params: {
          ...state.params,
          ...action.params,
        },
        loading: true,
      };
    default:
      return state;
  }
};

export default reducers;