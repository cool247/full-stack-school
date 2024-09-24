// /app/api/auth/signin/route.ts
import { signIn } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId, role } = await request.json();

  // Validate user credentials here (this is a mock implementation)
  if (!userId || !role) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });
  }

  // Call the signIn utility to set cookies
  return signIn(userId, role);
}
