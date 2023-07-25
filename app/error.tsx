"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center text-center py-56">
      <h2 className="text-3xl text-gray-800 font-bold">
        Something went wrong!
      </h2>
      <div className="mt-6">
        <button
          className="py-2 px-4 bg-purple-950 text-white rounded-lg"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </button>
      </div>
    </div>
  );
}
