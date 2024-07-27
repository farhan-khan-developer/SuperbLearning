import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Concert_One } from "next/font/google";
import { NavbarDemo } from "./components/NavbarDemo";

const inter = Inter({ subsets: ["latin"] });
const concert = Concert_One({subsets: ["latin"], weight: ['400']})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavbarDemo/>
        <div className={`${concert.className} relative top-12`}>{children}</div>
      </body>
    </html>
  );
}
