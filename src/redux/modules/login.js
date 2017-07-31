// Action constants
export const SHOW_LOGIN_ERROR = 'LOGIN_ERROR';
export const UPDATE_AUTH_STATE = 'UPDATE_AUTH_STATE';
export const SEND_TO_REGISTER = 'SEND_TO_REGISTER';

export function updateAuthState(userProfile) {
  return {
    type: UPDATE_AUTH_STATE,
    payload: userProfile
  };
}
export function showLoginError(show) {
  return {
    type: SHOW_LOGIN_ERROR,
    payload: show
  };
}

export function sendToRegister() {
  return {
    type: SEND_TO_REGISTER,
    payload: true
  };
}

const initialState = {
  showLoginError: false,
  userLogin: false,
  knownUser: false
};

// Reducer

export function authReducer(state = initialState, action) {
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
  case SEND_TO_REGISTER:
    return {
      ...state,
      knownUser: true
    };
  default:
    return state;
  }
}
