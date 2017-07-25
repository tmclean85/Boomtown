export const LOAD_PROFILES = 'LOAD_PROFILES';

// Action creator

export function loadProfile(userProfile) {
  return {
    type: LOAD_PROFILES,
    payload: userProfile
  };
}

// Reducer

const initialState = {
  loading: true,
  usersData: {}
};

export function ProfileLoader(state = initialState, action) {
  switch (action.type) {
  case LOAD_PROFILES:
    return {
      loading: false,
      usersData: action.payload
    };
  default:
    return state;
  }
}

// Thunk

export function getProfileData(userId) {
  return function (dispatch) {
    fetch(`http://localhost:3001/users/${userId}`)
    .then(response => response.json())
    .then(usersData => {
      dispatch(loadProfile(usersData));
    });
  };
}
