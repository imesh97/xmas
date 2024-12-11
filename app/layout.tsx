import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { fredoka } from "./fonts";

export const metadata: Metadata = {
  title: "Syd's 12 Days of Christmas",
  description: "A 12 day Christmas advent calendar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.ico" sizes="any" />
      </head>
      <body className={`${fredoka.className} antialiased`}>
        {children}
        <Toaster
          position="bottom-left"
          toastOptions={{
            className: "bg-[#f5f5f5] text-re lg:ml-8 border-none text-base",
          }}
        />
      </body>
    </html>
  );
}
