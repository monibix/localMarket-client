import React from "react";
import { AuthContext } from "./AuthContext";

export function useAuth() {
  return React.useContext(AuthContext);
}

export function withAuth(Component) {
  return function Wrapper(props) {
    const state = useAuth();
    return <Component {...props} {...state} />;
  };
}

export const defaultUser = {
  id: null,
  email: "",
  isLogged: false,
};

export function getLocalUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : defaultUser;
}

export function saveUser(user) {
  const strgyfiedUser = JSON.stringify({ ...user, isLogged: true });
  localStorage.setItem("user", strgyfiedUser);
}

export function removeUser() {
  localStorage.removeItem("user");
}
