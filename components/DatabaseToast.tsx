"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

export default function DatabaseToast() {
  useEffect(() => {
    toast.success(
      "Database connected successfully 🚀"
    );
  }, []);

  return null;
}