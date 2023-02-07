import { useState, useEffect } from "react";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Clock() {
  const time = useTime();
  return (
    <>
      <p>{time.toLocaleTimeString()}</p>
      <input className="bg-bg-subtle border border-border-default rounded-md outline-none px-4 py-1 max-w-full" />
    </>
  );
}
