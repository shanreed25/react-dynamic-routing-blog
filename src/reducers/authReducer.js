export function authReducer(state, action) {
  switch (action.type) {
    case "login":
        console.log("Logging In");

    case "logout": 
    console.log("Logging Out");
    default: {
      return state;
    }
  }
}