import "./globals.css";

import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Nunito as FontSans } from "next/font/google";
import NavBar from "./components/navbar/navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Namsraijamts Tserennadmid",
  description: "Namsraijamts Tserennadmid's personal website",
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <main className="mx-auto max-w-2xl relative min-h-screen">

          <nav className="w-full flex items-end justify-end px-3 py-12">
            <NavBar />
          </nav>

          {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
