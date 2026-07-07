"use client";

import { useEffect, useState } from "react";

export default function PingBadge() {
  const [ping, setPing] = useState(14);

  useEffect(() => {
    const id = setInterval(() => {
      setPing(11 + Math.floor(Math.random() * 9));
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return <span>{ping}</span>;
}
