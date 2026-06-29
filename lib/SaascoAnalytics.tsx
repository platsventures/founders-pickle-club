"use client";

import { useEffect } from "react";
import { saasco } from "./saasco";

export default function SaascoAnalytics() {
  useEffect(() => {
    saasco.init();
  }, []);
  return null;
}
