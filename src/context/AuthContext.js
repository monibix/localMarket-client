import React from "react";

const AuthContext = React.createContext();

const initialState = {
  user: localStorage.getItem("user"),
};

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(initialState);

  return (
    <AuthContext.Provider value={{ ...user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => React.useContext(AuthContext);
