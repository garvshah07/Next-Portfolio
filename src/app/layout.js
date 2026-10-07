import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import JsonLd from "@/components/JsonLd";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://garvshah.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Garv Shah — Frontend & Web Developer",
    template: "%s | Garv Shah",
  },
  description:
    "Official portfolio of Garv Shah — Frontend & Web Developer based in Ahmedabad, Gujarat, India. Specializing in React.js, Next.js 15, Tailwind CSS, and modern JavaScript with 9+ months of hands-on experience.",
  keywords: [
    "Garv Shah",
"Shah Garv",
"GarvShah",
"ShahGarv",
    "Garv Shah Developer",
    "Garv Shah Portfolio",
    "Frontend Developer Ahmedabad",
    "Web Developer Ahmedabad",
    "React Developer Gujarat India",
    "Next.js 15 Developer",
    "Tailwind CSS Specialist",
    "JavaScript Developer",
    "Garv Shah GLS University",
    "Garv Shah Silver Oak University",
    "garv8890@gmail.com",
  ],
  authors: [
    {
      name: "Garv Shah",
      url: "https://github.com/garvshah07",
    },
  ],
  creator: "Garv Shah",
  publisher: "Garv Shah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Garv Shah — Frontend & Web Developer",
    description:
      "Frontend & Web Developer in Ahmedabad crafting fast, responsive, and human-centered web experiences with React, Next.js, and Tailwind CSS.",
    url: "/",
    siteName: "Garv Shah Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/card-project/card.jpg",
        width: 1200,
        height: 630,
        alt: "Garv Shah — Frontend Developer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garv Shah — Frontend & Web Developer",
    description:
      "Frontend & Web Developer in Ahmedabad crafting fast, responsive, and human-centered web experiences with React, Next.js, and Tailwind CSS.",
    creator: "@grv_sh7",
    images: ["/images/card-project/card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <JsonLd />
  {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

      </head>
      <body
        className={`${poppins.variable} font-sans bg-[#090a0f] text-neutral-200 antialiased min-h-screen relative selection:bg-sky-500/20 selection:text-sky-200`}
      >
        {/* Subtle Minimalist Ambient Background Grid & Glows */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-500/[0.04] blur-[140px] rounded-full" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[400px] bg-indigo-500/[0.03] blur-[140px] rounded-full" />
          <div className="absolute inset-0 minimal-grid opacity-50" />
        </div>

        <Navbar />
        <main className="relative z-10 w-full overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
