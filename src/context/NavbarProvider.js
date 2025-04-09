"use client";
import { createContext, useState } from "react";

export const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavbarContext.Provider>
  );
}