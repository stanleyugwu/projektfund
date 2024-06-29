"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

interface IErrorProps {
    error: Error & { digest?: string }
    reset: () => void
}

export default function error({error, reset}: IErrorProps) {

  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="my-4 text-gray-500">We can't find that page.</p>

        <Button onClick={reset} >Retry</Button>
      </div>
    </div>
  );
}
