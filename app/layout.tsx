import type { Metadata } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import "./globals.css";

const display = Fredoka({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Nunito_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const metadata: Metadata = {
  title: "Vitu Confeitaria — Uma fatia em Icaraí | Prévia não oficial",
  description: "Conceito independente de site por Phelipe para a Vitu Confeitaria. Tortas, sabores e contato em Icaraí, Niterói. Demonstração não oficial.",
  robots: { index: false, follow: false },
  openGraph: { title: "Vitu Confeitaria — Todo dia pede uma fatia", description: "Demonstração não oficial por Phelipe, sem vínculo ou aprovação da empresa.", locale: "pt_BR", type: "website" },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="pt-BR"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
