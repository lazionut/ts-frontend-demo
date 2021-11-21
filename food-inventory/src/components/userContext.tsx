import React from 'react';

var userContext = React.createContext({user: ""});

export function changeAuthState(newUser: string) {
    userContext = React.createContext({user: newUser});
  }
   
export { userContext };