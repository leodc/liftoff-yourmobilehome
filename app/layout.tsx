import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MobileHomeBuyer - Fast & Fair Mobile Home Purchases",
  openGraph: {
    title: "MobileHomeBuyer - Fast & Fair Mobile Home Purchases",
    description:
      "MobileHomeBuyer offers quick, fair cash offers for mobile homes in any condition. Sell your home fast and hassle-free.",
    images: [
      {
        url: "https://demo.useliftoff.com/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MobileHomeBuyer - Fast & Fair Mobile Home Purchases",
    description:
      "MobileHomeBuyer offers quick, fair cash offers for mobile homes in any condition. Sell your home fast and hassle-free.",
    images: ["https://demo.useliftoff.com/opengraph-image"]
  },
  metadataBase: new URL("https://demo.useliftoff.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
