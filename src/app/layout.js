
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarProvider } from "@/context/NavbarProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "GTR Score",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavbarProvider>
          {children}
        </NavbarProvider>
      </body>
    </html>
  );
}
