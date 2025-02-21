"use client";

import { useState } from "react";
import Loader from "./Loader";

interface LoaderWrapperProps {
  children: React.ReactNode;
}

const LoaderWrapper: React.FC<LoaderWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return <>{isLoading ? <Loader setHideLoader={setIsLoading} /> : children}</>;
};

export default LoaderWrapper;
