import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar.component";
const inter = Inter({ subsets: ["latin"] });
import { ReduxProvider } from "./ReduxProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html>
      <body>
        <ReduxProvider>
          {/* Include shared UI here e.g. a header or sidebar */}
          <Navbar />

          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
