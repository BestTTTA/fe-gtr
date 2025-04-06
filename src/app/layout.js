import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/components/layout/Menu";
import Navbar from "@/components/layout/Navbar";

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
      <body
        className={`${inter.className} flex`}
      >
        <Menu />
        <div className="flex flex-col w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
