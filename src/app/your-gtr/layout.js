import Menu from "@/components/layout/Menu";
import Navbar from "@/components/layout/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`flex`}
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
