/* eslint-disable new-cap */
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Urbanist } from "next/font/google";

export const metadata = {
  title: "WINC @ UCR",
  description: "Women In Computing Official Website",
};

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.variable}>{children}</body>
    </html>
  );
}
