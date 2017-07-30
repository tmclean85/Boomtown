// Action constants
export const SHOW_LOGIN_ERROR = 'LOGIN_ERROR';
export const UPDATE_AUTH_STATE = 'UPDATE_AUTH_STATE';

export const updateAuthState = userProfile => ({ type: UPDATE_AUTH_STATE, payload: userProfile });
export const showLoginError = show => ({ type: SHOW_LOGIN_ERROR, payload: show });

// Reducer

export const authReducer = (state = {
  userLogin: false,
  showLoginError: false
}, action) => {
  switch (action.type) {
  case UPDATE_AUTH_STATE:
    return {
      ...state,
      userProfile: action.payload
    };
  case SHOW_LOGIN_ERROR:
    return {
      ...state,
      showLoginError: true
    };
  default:
    return state;
  }
};
