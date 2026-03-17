'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest: string };
    reset: () => void;
}) {
    console.log(error);
    return (
        <div id="error">
            <h1>Something went wrong!</h1>
            <p>{error.message}</p>
            <p>{error.digest}</p>
            <button onClick={reset}>Try again</button>
        </div>
    );
}
