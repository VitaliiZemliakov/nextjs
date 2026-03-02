/* eslint-disable react-hooks/purity */
"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.log(error);
    return (
        <div className="error">
            <h1>An error occurred!</h1>
            <p>Failed to fetch meals.</p>
            <p>{Math.random().toFixed(5)}</p>
            <button onClick={reset}>Try Again</button>
        </div>
    );
}
