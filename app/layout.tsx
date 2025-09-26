// app/layout.tsx
import "@/styles/globals.css"; // Import your global CSS
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "TR VSSK-Consultant Services | Hyderabad",
  description: "Welcome to TR VSSK website",
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
      <body>{children}</body>
    </html>
  );
}
