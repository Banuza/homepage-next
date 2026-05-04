import type { Metadata } from "next";
import "@/styles/style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://banuza.com"),
  title: "Banuza - Indie Game Studio",
  description:
    "We're an independent studio creating games through thoughtful design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
