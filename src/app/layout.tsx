import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaura - A Luxurious Dining Experience",
  description: "Enjoy fine dining at Restaura, where luxury and delicious food come together. Visit us for a special and unforgettable dining experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
