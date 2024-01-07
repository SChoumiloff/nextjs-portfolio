import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sacha Choumiloff - Data Engineering Portfolio',
  description: "Explore Sacha Choumiloff's portfolio showcasing expertise in data engineering, analytics, and a passion for mountain exploration.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/logo.png" />
      <title>{metadata.title}</title>
      <meta name='description' content={metadata.description}/>
      <meta name="keywords" content="Sacha Choumiloff, Data Engineering, Data Analytics, Portfolio, Mountain Exploration, Big Data, Data Visualization" />
      <meta name="robots" content="index,follow" />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta http-equiv="content-language" content="en" />
        {/* Hotjar Tracking Code avec vérification côté client */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined') {
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3816077,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            }
          `
        }} />
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
