import ClientProviders from "./ClientProviders";
import "./globals.css";
import { Inter, Syne_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const syneMono = Syne_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-syne-mono",
});

export const metadata = {
  title: "Solidity 101",
  description: "Inscripciones",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syneMono.variable}`}>
      <ClientProviders>
        <body className={inter.className}>{children}</body>
      </ClientProviders>
    </html>
  );
}
