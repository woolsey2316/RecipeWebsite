import React, { createContext, useReducer, useEffect } from 'react';
import AuthService from '../Services/AuthService';

export const AuthContext = createContext();

const reducer = (authState, action) => {
  let newAuthState
  switch (action.type) {
    case "LOGIN_COMPLETE":
      newAuthState = {
        user: action.payload,
        isAuthenticated: true,
        isLoaded: true
      }
    case "LOGIN":
      newAuthState = {
        user: action.payload,
        isAuthenticated: true,
        isLoaded: false
      }
    case "LOGOUT":
      newAuthState = {
        user: {username: "", role: ""},
        isAuthenticated: false,
        isLoaded: false
      }
  }
}
const initialState = {
  user: null,
  isAuthenticated: false,
  isLoaded: false
}
export default ({ children }) => {
  const [auth, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    AuthService.isAuthenticated().then(data => {
      dispatch("LOGIN_COMPLETE")
    })
  },[]);

  return (
    <div>
      {/* {!auth.isLoaded ? <h1>Loading</h1> :  */}
      <AuthContext.Provider value={{auth,dispatch}}>
        { children }
      </AuthContext.Provider>
      {/* } */}
    </div>
  )
}