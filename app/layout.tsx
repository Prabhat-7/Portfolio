import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/pageTransition";
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "Prabhat Sitaula",
  description:
    "Explore the personal portfolio of Prabhat Sitaula, a passionate web developer specializing in modern web technologies .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <meta
          name="keywords"
          content="Prabhat Sitaula, Web Developer, React, Django, Portfolio"
        />
        <meta name="author" content="Prabhat Sitaula" />
      </Head>
      <body className={`${jetBrainsMono.variable}`}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
