"use client";

import { ReactNode, useEffect, useState } from "react";
import { LoadingScreen } from "@/components/wiki/LoadingScreen";

interface ClientBodyProps {
  children: ReactNode;
}

export function ClientBody({ children }: ClientBodyProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟加载过程
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        children
      )}
    </>
  );
}
