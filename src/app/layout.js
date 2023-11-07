import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sacha Choumiloff',
  description: "Sacha Chomiloff's data engineering portfolio with a passion for mountains.",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" />
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description}/>
        <meta name="keywords" content="data engineering, data elevation, portfolio, mountains, Sacha Choumiloff" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta http-equiv="content-language" content="en" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-34PTC9DSKE"></script>
        <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-34PTC9DSKE');
        `}
        </script>
      </head>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
