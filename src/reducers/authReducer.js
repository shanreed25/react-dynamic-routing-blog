export function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isAuthenticated: true };
    case "logout": 
      return { ...state, isAuthenticated: false };
    default: 
      return state;
  }
}