import Script from 'next/script'
import { Raleway } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://gotravelsrilanka.com'),
  title: {
    default: 'Sri Lanka Travel Guide — Places, Tips & News | GoTravel Sri Lanka',
    template: '%s | GoTravel Sri Lanka',
  },
  description: 'Plan your Sri Lanka trip: places to see, stay and eat, visa and driving licence info, festivals, safaris, history and trip tips from locals.',
  alternates: { canonical: 'https://gotravelsrilanka.com' },
  openGraph: { type: 'website', siteName: 'GoTravel Sri Lanka', url: 'https://gotravelsrilanka.com' },
}

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6035916583698763" />
        <link rel="icon" href='/logo.jpg' />
        
        {/* Google AdSense Script */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6035916583698763"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}