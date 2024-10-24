import type { Metadata } from "next";
import "./globals.scss";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HomeProps } from "@/utils/home.type";
import { getDataHome } from "@/utils/actions/get-data";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "DevMotors - Oficina de carros especializada",
  description: "Oficina de carros em São Paulo",
  keywords: ["oficina", "oficina carros", "carros", "manutenção de carros"],
  openGraph: {
    title: "DevMotors - Oficina de carros especializada",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { object }: HomeProps = await getDataHome();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer object={object} />
      </body>
    </html>
  );
}
