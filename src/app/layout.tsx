import type { Metadata } from "next";
import {
  Poppins,
  Inconsolata,
  Outfit,
  Alumni_Sans_Collegiate_One,
  Silkscreen,
  Oleo_Script,
} from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const alumniSansCollegiateOne = Alumni_Sans_Collegiate_One({
  variable: "--font-alumni-sans-collegiate-one",
  subsets: ["latin"],
  weight: ["400"],
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400"],
});

const oleoScript = Oleo_Script({
  variable: "--font-oleoscript",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sherren's Portfolio",
  description: "Sherren's Portfolio created by next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${poppins.variable} ${inconsolata.variable} ${outfit.variable} ${alumniSansCollegiateOne.variable} ${silkscreen.variable} ${oleoScript.variable}`}
    >
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
