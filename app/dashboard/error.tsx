"use client";

import React, { startTransition } from "react";
import { useRouter } from "next/navigation";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  const router = useRouter();

  const resolve = () => {
    startTransition(() => {
      reset();          // resets error boundary
      router.refresh(); // refetches server components
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Something went wrong </h2>
      <p>{error.message}</p>

      <button onClick={resolve}>
        Reset Error
      </button>
    </div>
  );
}
