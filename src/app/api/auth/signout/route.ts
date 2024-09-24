import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.redirect('/'); // Redirect to home page after logging out

  // Clear the session-related cookies
  response.cookies.set('userId', '', { expires: new Date(0) });
  response.cookies.set('role', '', { expires: new Date(0) });

  return response;
}
