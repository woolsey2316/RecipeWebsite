import React, { createContext, useReducer, useEffect } from 'react';
import AuthService from '../Services/AuthService';

export const AuthConectext = createContext();

const reducer = (authState, action) => {
  let newAuthState
  switch (action.type) {
    case "COMPLETE_LOGIN":
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
  const [auth, dispatch] = useState(reducer, initialState);
  
  useEffect(() => {
    AuthService.isAuthenticated().then(data => {
      dispatch("COMPLETE_LOGIN")
    })
  })
}