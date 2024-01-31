import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Things to believe in",
  description: "(for creative people, mainly)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-white'>{children}</body>
    </html>
  );
}
