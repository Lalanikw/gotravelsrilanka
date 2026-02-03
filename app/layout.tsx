import Script from 'next/script'
import { Raleway } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Sri Lanka | Travel Information',
  description: 'Sri Lanka travel information site. Search for places to see, stay and eat. Find information such as VISA and Driving Licensing. Read about the history and current situation of the Island. Plan for weddings, events and photography. Checkout the major festivals. Reach out for trip tips from locals'
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