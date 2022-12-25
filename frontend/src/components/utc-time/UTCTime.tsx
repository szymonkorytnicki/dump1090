import { useEffect, useState } from "react";

export function UTCTime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      UTC: {time.getUTCHours()}:{time.getUTCMinutes()}
    </>
  );
}
