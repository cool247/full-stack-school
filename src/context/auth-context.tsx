"use client";

import { createContext, ReactNode, useContext, useState } from "react";

const AuthContext = createContext({
  isLoaded: false,
  isSignedIn: false,
  user: { publicMetadata: { role: "" } },
  sessionClaims: { metadata: { role: "" } },
  userId: "",
  signIn: (role: string, userId: string) => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState({
    isLoaded: false,
    isSignedIn: false,
    sessionClaims: { metadata: { role: "" } },
    user: { publicMetadata: { role: "" } },
    userId: "",
  });

  const signIn = (role: string, userId: string) => {
    const mockUser = { publicMetadata: { role } }; // Mock user data
    const mockSession = { metadata: { role } }; // Mock session data

    setState({
      isLoaded: true,
      isSignedIn: true,
      user: mockUser,
      sessionClaims: mockSession,
      userId,
    });
  };

  return <AuthContext.Provider value={{ ...state, signIn }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = AuthContext;
  if (!context) throw new Error("AuthProvider is missing");

  return useContext(AuthContext);
}
