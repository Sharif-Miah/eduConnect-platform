import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { Inter, Poppins } from "next/font/google";


const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], variable: "--font-poppins", weight: ['400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: "EduConnect - World's Best Learning Platform",
  description: "Connect with the best educators and institutions around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(inter.className, poppins.className)}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
