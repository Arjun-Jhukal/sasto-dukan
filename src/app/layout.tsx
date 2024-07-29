import type { Metadata } from "next";
import { Jost, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/templates/Footer";

const inter = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: {
    default: "At the best price - Sasto Dukan",
    template: "%s | Sasto Dukan",
  },
  description: "Discover unbeatable prices at Sasto Dukan. Shop now for the best deals.",
  openGraph: {
    type: "website",
    url: "https://www.sastodukan.com",
    title: "At the best price - Sasto Dukan",
    description: "Discover unbeatable prices at Sasto Dukan. Shop now for the best deals.",
    images: [
      {
        url: "https://www.sastodukan.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Sasto Dukan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SastoDukan",
    title: "At the best price - Sasto Dukan",
    description: "Discover unbeatable prices at Sasto Dukan. Shop now for the best deals.",
    // image: 'https://www.sastodukan.com/twitter-image.jpg'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
