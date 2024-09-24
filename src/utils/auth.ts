// /app/utils/auth.ts
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextResponse } from "next/server"; // Import NextResponse

export interface AuthState {
  isLoaded: boolean;
  isSignedIn: boolean;
  role: string | null;
  userId: string | null;
}

// Utility function to get authentication state from ReadonlyRequestCookies
export function getAuth(cookies: ReadonlyRequestCookies): AuthState {
  const userId = cookies.get("userId")?.value || null;
  const role = cookies.get("role")?.value || "";

  const isSignedIn = Boolean(userId);

  return {
    isLoaded: true,
    isSignedIn,
    role,
    userId,
  };
}

// Utility function to sign in a user
export function signIn(userId: string, role: string): NextResponse {
  const response = NextResponse.json(
    { message: "Signed in successfully" },
    {
      status: 200,
    }
  );

  // Set cookies on the response
  response.cookies.set("userId", userId, { httpOnly: true });
  response.cookies.set("role", role, { httpOnly: true });

  return response;
}
