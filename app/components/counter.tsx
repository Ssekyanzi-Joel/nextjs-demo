'use client';
import { useState } from "react";
import {useAuth,useUser} from "@clerk/nextjs";

export const UserInfo = () => {
  const { isSignedIn } = useAuth();
  const user = useUser();
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter Component</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};