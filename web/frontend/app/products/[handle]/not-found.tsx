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
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
