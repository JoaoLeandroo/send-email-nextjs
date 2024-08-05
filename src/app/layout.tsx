import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "800", "900"] });

export const metadata: Metadata = {
  title: "Send Email",
  description: "Enviando email",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className} bg-teal-600`}>{children}</body>
    </html>
  );
}
