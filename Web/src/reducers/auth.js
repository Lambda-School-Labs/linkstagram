import {
    USER_AUTHENTICATED,
    USER_UNAUTHENTICATED,
    AUTHENTICATION_ERROR,
    CHECK_IF_AUTHENTICATED,
  } from '../actions/constants/auth';
  
  export default (auth = {}, action) => {
    switch (action.type) {
      case USER_AUTHENTICATED:
        return { ...auth, authenticated: action.payload.authenticated, access_token:action.payload.access_token, registered:action.payload.registered};
      case USER_UNAUTHENTICATED:
        return { ...auth, authenticated: false };
      case AUTHENTICATION_ERROR:
        return { ...auth, error: action.payload };
      case CHECK_IF_AUTHENTICATED:
        return { ...auth };
      default:
        return auth;
    }
  }; 