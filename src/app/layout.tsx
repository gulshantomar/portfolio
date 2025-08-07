import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gulshan Tomar - Developer, Freelancer & Problem Solver",
  description: "Personal portfolio of Gulshan Tomar, showcasing skills in web development, freelancing, and problem-solving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative select-none"
      >
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
