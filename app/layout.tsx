import type { Metadata } from "next";
import { inter } from "next/font/google";
import "/app/globals.css";
import ClientLayout from "./ClientLayout";

const interFont = inter({ subsets: ["latin"] });

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
      <body className={interFont.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
