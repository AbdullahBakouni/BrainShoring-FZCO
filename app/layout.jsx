import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "./components/FloatingNav";
import { navItems } from "./lib/constans";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BRAINSHORING - FZCO",
  description:
    "BRAINSHORING - FZCO delivers innovative mobile and web apps, plus expert social media management and targeted advertising to accelerate your digital success.",

  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNav navItems={navItems} />
        {children}
      </body>
    </html>
  );
}
