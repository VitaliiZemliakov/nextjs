import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "404 - Not Found",
    description: "The page you are looking for does not exist.",
};

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
            <Link
                href="/"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Go to Home
            </Link>
        </div>
    );
}
