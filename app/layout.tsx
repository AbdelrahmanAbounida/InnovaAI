import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { AllProviders } from "@/providers";
import NextTopLoader from "nextjs-toploader";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <AllProviders>{children}</AllProviders>
      </body>
    </html>
  );
}
