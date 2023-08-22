// UserContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Action types
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

// Action creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });

// Reducer function
function userReducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload, isLoggedIn: true };
    case LOGOUT:
      return { ...state, user: null, isLoggedIn: false };
    default:
      return state;
  }
}

// Create the user context
const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userState, dispatch] = useReducer(userReducer, {
    user: null,
    isLoggedIn: false,
  });

  return (
    <UserContext.Provider value={{ ...userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
