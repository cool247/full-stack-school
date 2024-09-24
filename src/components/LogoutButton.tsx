"use client";
import { signOut } from "@/lib/actions";
import Image from "next/image";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut()} // Call the server action directly
      className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 ml-4 mt-8" >
      <Image src="/logout_white.png" alt="" width={20} height={20} style={{display:'inline-block'}} className="mr-2" />
      Sign Out
    </button>
  );
}
