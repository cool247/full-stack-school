"use client";
// import { cookies } from "next/headers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const adminUser = { role: "admin", userId: "admin1" };
const teacherUser = { role: "teacher", userId: "teacher1" };
const studentUser = { role: "student", userId: "student1" };
const parentUser = { role: "parent", userId: "parent1" };
//

const LoginPage = () => {
  const router = useRouter();
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  // const cookieStore = cookies();

  async function signIn(role: string, userId: string) {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, role }),
      });
      if (!response.ok) {
        toast.error("failed to login");
      } else {
        setRole(role);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (role) {
      router.push(`/${role}`);
    } else {
      // cookieStore.delete("userId");
      // cookieStore.delete("role");
    }
  }, [role, router]);

  return (
    <div className="h-screen bg-davSkyLight">
      {loading && <OverLay />}
      <h1 className="text-xl font-bold flex items-center gap-2">
        <Image src="/logo.png" alt="" width={24} height={24} />
        SchoolDav
      </h1>
      <div className="max-w-md flex flex-col gap-3 mx-auto">
        <h2 className="text-yellow-800 bg-slate-200 text-center text-3xl mb-4">Sign IN</h2>
        <button
          className="px-4, py-2 text-white px-4 rounded bg-blue-400 hover:bg-blue-500 ring-1"
          onClick={() => signIn(adminUser.role, adminUser.userId)}>
          As Admin
        </button>
        <button
          className="px-4, py-2 text-white px-4 rounded bg-blue-400 hover:bg-blue-500 ring-1"
          onClick={() => signIn(teacherUser.role, teacherUser.userId)}>
          As Teacher
        </button>
        <button
          className="px-4, py-2 text-white px-4 rounded bg-blue-400 hover:bg-blue-500 ring-1"
          onClick={() => signIn(studentUser.role, studentUser.userId)}>
          As Student
        </button>
        <button
          className="px-4, py-2 text-white px-4 rounded bg-blue-400 hover:bg-blue-500 ring-1"
          onClick={() => signIn(parentUser.role, parentUser.userId)}>
          As Parent
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

function OverLay({ title = "Loading, Please Wait", onClose }: { title?: string; onClose?: () => void }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <p>{title}</p>
        {onClose && (
          <button className="text-white px-4 rounded bg-red-400 hover:bg-red-500 ring-1 mt-5" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
}
