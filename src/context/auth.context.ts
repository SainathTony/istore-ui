import { createContext } from "react";
import { User } from "../modal/user.modal";

export type AuthContextType = {
  isLoggedIn: boolean;
  user: User | null;
  setUser: (user: User) => void;
};

const user = null;
const setUser = (user: User) => {
  user = user;
};

export const authInitialState: AuthContextType = {
  isLoggedIn: false,
  user,
  setUser,
};

export const AuthContext = createContext<AuthContextType>(authInitialState);
