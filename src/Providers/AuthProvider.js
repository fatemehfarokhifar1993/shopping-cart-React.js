import React, { useState, useContext, useEffect } from "react";
const AuthProviderContext = React.createContext();
const AuthProviderContextDispatcher = React.createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("authState"));
    if(userData) setState(userData);
  }, []);

  useEffect(() => {
    localStorage.setItem("authState", JSON.stringify(state));
  }, [state]);

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
