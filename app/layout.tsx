import localFont from "next/font/local";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";
import NavBar from "@/components/NavBar";

// Importar la fuente local
const fontBalto = localFont({
  src: "./fonts/Balto.ttf", // 🔥 Asegúrate de que esté en "public/fonts/"
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dante Avatar Demo",
    template: `%s - HeyGen Interactive Avatar SDK Demo`,
  },
  icons: {
    icon: "/INFERNO_LOGOS-05.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={fontBalto.className}
    >
      <head />
      <body className={clsx("min-h-screen bg-background antialiased")}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main className="relative flex flex-col h-screen w-screen">
            <NavBar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
