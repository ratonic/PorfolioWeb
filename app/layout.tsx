import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Cambiar de Roboto a Poppins
import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'




// Importa la fuente Poppins
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Portfolio Omar Acosta",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}> {/* Aplicar la fuente Poppins */}
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
