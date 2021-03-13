import React from "react";
import {
  login,
  logout,
  signup,
  editUser as editUserService,
  getUser,
} from "../service/auth.service";
import {
  getLocalUser,
  saveUser,
  removeUser,
  defaultUser,
} from "./AuthContext.utils";

export const AuthContext = React.createContext({});

const initialState = {
  user: getLocalUser(),
};

function AuthProvider({ children }) {
  const [state, setState] = React.useState(initialState);

  const handleLogin = React.useCallback(async (user) => {
    try {
      const { data: loggedUser } = await login(user);
      console.log("loged user", loggedUser);
      saveUser(loggedUser);
      setState({ user: { ...loggedUser, isLogged: true } });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSignup = React.useCallback(async (user) => {
    try {
      const { data: loggedUser } = await signup(user);
      saveUser(loggedUser);
      setState({ user: { ...loggedUser, isLogged: true } });
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleLogout = React.useCallback(async () => {
    try {
      await logout();
      removeUser();
      setState({ user: defaultUser() });
      console.log("logout");
    } catch (e) {
      console.error(e);
    }
  }, []);

  //funcion para editar la informacion del usuario
  const editUser = async (userId, body) => {
    try {
      const { data: userInfo } = await editUserService(userId, body);
      setState({ user: { ...userInfo, isLogged: true } });
    } catch (e) {
      console.error(e);
    }
  };
  //funcion para extraer toda la informacion del usuario
  const getUserInfo = async (userId) => {
    try {
      const { data: userInfo } = await getUser(userId);
      setState({ user: { ...userInfo, isLogged: true } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        handleLogin,
        handleLogout,
        handleSignup,
        editUser,
        getUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
