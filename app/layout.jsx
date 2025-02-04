import { Outfit } from 'next/font/google';
import localFont from "next/font/local";
import "./globals.css";

import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  
})


export const metadata = {
  title: "Emmanuel Famakinde",
  description: "Emmanuel's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute='class'defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
