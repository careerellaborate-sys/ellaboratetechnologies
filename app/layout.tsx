import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ellaboratetechnologies.com"),
  title: {
    default: "Ellaborate Technologies | AI, IoT & Autonomous Systems Engineering",
    template: "%s | Ellaborate Technologies",
  },
  description:
    "Ellaborate Technologies delivers precision AI/ML development, IoT hardware, autonomous vehicle systems, ERP implementation, and custom software solutions for enterprise clients.",
  keywords: [
    "AI development company India",
    "IoT hardware development",
    "autonomous vehicle engineering",
    "SAP implementation services",
    "custom software development India",
    "embedded systems company India",
    "ML solutions",
    "ERP consulting",
  ],
  authors: [{ name: "Ellaborate Technologies" }],
  creator: "Ellaborate Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ellaboratetechnologies.com",
    siteName: "Ellaborate Technologies",
    title: "Ellaborate Technologies | AI, IoT & Autonomous Systems",
    description: "Precision engineering for AI, IoT, and autonomous technologies. Enterprise-grade solutions built right.",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Ellaborate Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellaborate Technologies",
    description: "Precision engineering for AI, IoT, and autonomous technologies.",
    images: ["/og/default.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: "REPLACE_WITH_GSC_VERIFICATION_CODE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
