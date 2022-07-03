import React, { useState,useContext } from "react";
const AuthProviderContext = React.createContext();
const AuthProviderContextDispatcher = React.createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] =useState(false);
  return (
    <AuthProviderContext.Provider value={state}>
      <AuthProviderContextDispatcher.Provider value={setState}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthActions = () => useContext(AuthProviderContextDispatcher);