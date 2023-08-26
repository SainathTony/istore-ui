import {createContext } from "react";
import { User } from "../modal/user.modal";

export type AuthContextType = {
    isLoggedIn: boolean;
    user: User | null;
}

export const authInitialState: AuthContextType = {
    isLoggedIn: false,
    user: null
}

export const AuthContext = createContext<AuthContextType>(authInitialState);