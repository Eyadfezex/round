"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";

const Provider = (children: { children: any }) => {
  return (
    <NextUIProvider>
      <>{children}</>
    </NextUIProvider>
  );
};

export default Provider;
