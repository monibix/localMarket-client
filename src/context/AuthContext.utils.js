import React from "react";
import { AuthContext } from "./AuthContext";
import { getUser } from "../service/auth.service";

export function useAuth() {
  return React.useContext(AuthContext);
}

export function withAuth(Component) {
  return function Wrapper(props) {
    const state = useAuth();
    return <Component {...props} {...state} />;
  };
}

export function defaultUser() {
  return {
    id: null,
    email: "",
    isLogged: false,
  };
}

export function getLocalUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : defaultUser();
}

export function saveUser(user) {
  const strgyfiedUser = JSON.stringify({ ...user, isLogged: true });
  localStorage.setItem("user", strgyfiedUser);
}

export function removeUser() {
  localStorage.removeItem("user");
}

export function useRefreshUser({ email, id }, onSuccess) {
  const { isLogged } = getLocalUser();
  React.useEffect(() => {
    const hasMissingInfo = !email || !id;
    if (isLogged && hasMissingInfo) {
      getUser().then(({ data: user }) => onSuccess(user));
    }
  }, [email, id, isLogged, onSuccess]);
}
