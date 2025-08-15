import { Geist, Geist_Mono, Inter } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solarius - Smart Business Solutions & Technology Consultancy",
  description:
    "Transform your business with innovative technology products and expert consultancy services. From analytics dashboards to AI integration, Solarius delivers comprehensive solutions for modern enterprises.",
  keywords: [
    "business solutions",
    "technology consultancy",
    "analytics dashboard",
    "workflow automation",
    "AI integration",
    "CRM platform",
    "digital transformation",
    "business intelligence",
    "enterprise software",
    "custom development",
  ],
  authors: [{ name: "Solarius Team" }],
  creator: "Solarius",
  publisher: "Solarius",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://solarius.com",
    siteName: "Solarius",
    title: "Solarius - Smart Business Solutions & Technology Consultancy",
    description:
      "Transform your business with innovative technology products and expert consultancy services. From analytics dashboards to AI integration, Solarius delivers comprehensive solutions for modern enterprises.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solarius - Smart Business Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers

        >
          {children}
        </Providers>
      </body>
    </html>
  );
}
