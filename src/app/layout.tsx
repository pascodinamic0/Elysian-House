import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { fontVariables } from "@/lib/fonts";
import { metadata as siteMetadata, siteConfig } from "@/content/copy";
import { ThemeProvider } from "@/hooks/use-theme";
import { SkipLink } from "@/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    ...siteMetadata.openGraph,
    url: siteConfig.url,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elysian House — A quiet room for women who are ready to begin again.",
      },
    ],
  },
  twitter: {
    ...siteMetadata.twitter,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        {/* Preload fonts for better performance */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('elysian-theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[var(--color-linen)] text-[var(--color-stone)] font-sans antialiased">
        <ThemeProvider>
          <SkipLink />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
