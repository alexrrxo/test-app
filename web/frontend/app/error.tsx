"use client";

import { FC, useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const GlobalError: FC<Props> = ({ error, reset }) => {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <>
      <h2>Error</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
};

export default GlobalError;
