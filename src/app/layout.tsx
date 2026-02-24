import "./globals.css";
import type { Metadata } from "next";
// Locally bundled fonts — no Google Fonts network request during build
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/playfair-display/600.css";

export const metadata: Metadata = {
  title: "Daniel Klečka — Idea Maker",
  description:
    "Pomáhám firmám a zakladatelům najít jasnou myšlenku, správná slova a funkční strukturu webu i kampaní. Copywriting, konzultace, obsah a prototypy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
