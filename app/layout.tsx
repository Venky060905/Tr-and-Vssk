// app/layout.tsx
import "@/styles/globals.css"; 
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TR VSSK - Consultant Services | Hyderabad",
  description: "Welcome to TR VSSK website",
  icons: {
    icon: "/favicon.ico", // Place favicon.ico in public/
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="gDTDZWwxPibHVCQJFzUQZJMepD71iCHKrGzI3QHvd6Y"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
