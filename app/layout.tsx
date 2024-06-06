import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils";


const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PejuangKorea-Community",
  description: "test",
  icons: {
    icon: "icons/fav2.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn( 
        font.className,
        "bg-white dark:bg-gradient-to-b dark:from-[#1a313f] dark:to-black"
        )}>
      <TooltipProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
          >
        {children}
        </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
