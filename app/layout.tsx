import type { Metadata } from "next";
import "./globals.css";
import { AppConfig } from "@/config/app.config";
import TopBar from "./components/common/TopBar";
import Footer from "./components/common/Footer";
import ConditionalHero from "./components/common/ConditionalHero";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import CookieConsent from "./components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} style={{ overflowX: 'hidden' }} >
        <TopBar />
        <ConditionalHero 
          contactEmail="info@thainnoel.com"
          contactPhone="(085) 834-9461"
          consultationButtonText="Book a Consultation"
        />
        {children}
        <CookieConsent/>
        <Footer />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
