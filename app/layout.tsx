import type { Metadata } from "next";
import { Inter } from "next/font"; // Use "next/font" instead of "next/font/google"
import "/app/globals.css";
import ClientLayout from "./ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skibidi Language Translator",
  description: "Translate normal language into Skibidi language",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
