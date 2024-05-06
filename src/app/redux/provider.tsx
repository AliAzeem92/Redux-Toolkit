"use client";

import { Provider } from "react-redux";
import { store } from "./store";

interface childrenProps {
  children: any;
}

export function Providers({ children }: childrenProps) {
  return <Provider store={store}>{children}</Provider>;
}
