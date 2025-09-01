import "./globals.css";
import { Urbanist } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const urbanist = Urbanist({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "WINC @ UCR",
  description: "Women In Computing Official Website",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        <Footer />
      </body>
    </html>
  );
}
