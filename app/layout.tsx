import type { Metadata, Viewport } from 'next'
import { Geist, Newsreader, Noto_Naskh_Arabic, Noto_Sans_Egyptian_Hieroglyphs } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { GlyphField } from '@/components/glyph-field'
import { SITE } from '@/content/site'
import { SITE_URL } from '@/lib/constants'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F6F1E8',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — ${SITE.title}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.name, url: SITE_URL }],
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description,
  },
  alternates: {
    canonical: '/',
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '600', '700'],
})

const notoNaskh = Noto_Naskh_Arabic({
  variable: '--font-noto-naskh',
  subsets: ['arabic'],
  weight: ['400', '500'],
})

const notoHiero = Noto_Sans_Egyptian_Hieroglyphs({
  variable: '--font-hiero',
  weight: '400',
  subsets: ['egyptian-hieroglyphs'],
})

const themeInitScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    document.documentElement.classList.toggle('dark', stored === 'dark');
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${geist.variable} ${newsreader.variable} ${notoNaskh.variable} ${notoHiero.variable} bg-papyrus font-sans text-ink antialiased dark:bg-[#161310] dark:text-papyrus`}
      >
        <ThemeProvider>
          <GlyphField />
          <div className="relative z-10 flex min-h-screen w-full flex-col">
            <div className="relative mx-auto w-full max-w-[42rem] flex-1 px-6 pb-16 pt-10 sm:pt-12">
              <Header />
              <div className="page-wash mt-4 border-t border-sand/80 pt-4 dark:border-white/10">
                {children}
                <Footer />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
