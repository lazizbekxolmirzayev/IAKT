import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "@/module/NavBar";
import Footer from "@/module/Footer";
import AuthGate from "@/module/AuthGate";
import { GA_MEASUREMENT_ID } from "@/module/statsConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "IAKT — Iqtisodiyotda axborot-kommunikatsiya texnologiyalari va tizimlari",
    template: "%s | IAKT",
  },
  description: "Iqtisodiyotda AKT fani uchun elektron ta'lim platformasi: ma'ruzalar, laboratoriya ishlari, nazorat testlari va iqtisodiy axborot kompetentligini rivojlantirish moduli.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
      <AuthGate nav={<NavBar />} footer={<Footer />}>{children}</AuthGate>
      {GA_MEASUREMENT_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      ) : null}
        </body>
    </html>
  );
}
