import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-6">
        We couldn&apos;t find the page you&apos;re looking for. It might have been removed or the URL could be
        incorrect.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-blue-700 transition duration-300">
        Go Back Home
      </Link>
      <Image
        src="/public/404.png" // Replace with your actual image path
        alt="Not Found Illustration"
        className="mt-10 w-72 opacity-90"
      />
    </div>
  );
}
