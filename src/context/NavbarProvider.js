"use client"
import { createContext, useState } from 'react';

export const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen, activeTab, setActiveTab }}>
      {children}
    </NavbarContext.Provider>
  );
}