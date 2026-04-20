import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import Image from 'next/image'
import Script from 'next/script'
import { PostHogProvider } from './components/providers/PostHogProvider'

const siteData = {
  name: 'Svix Docs',
  tagline: 'Webhooks as a service',
  url: 'https://docs.svix.com',
  repo: 'https://github.com/svix/svix-webhooks',
  docsSource: 'https://github.com/svix/svix-docs',
}

export const metadata = {
  metadataBase: new URL(siteData.url),
  title: {
    default: `${siteData.name} – ${siteData.tagline}`,
    template: `%s | ${siteData.name}`,
  },
  openGraph: {
    url: siteData.url,
    siteName: siteData.name,
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/img/brand.svg' }],
  },
}

const navbar = (
  <Navbar
    align="left"
    className="!x:justify-start"
    logo={
      <>
        <Image
          src="/img/brand.svg"
          alt="Svix logo"
          width={80}
          height={22}
          className="dark:hidden"
          priority
        />
        <Image
          src="/img/brand.white.svg"
          alt="Svix logo"
          width={80}
          height={22}
          className="hidden dark:block"
          priority
        />
      </>
    }
    logoLink={siteData.url}
    projectLink={siteData.repo}
  >
  </Navbar>
)

const footer = <Footer>Copyright © Svix</Footer>

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z7S16CMH3G" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z7S16CMH3G', { anonymize_ip: true });
          `}
        </Script>
        <Script src="/js/segment.js" strategy="afterInteractive" />
        <Script src="/js/apollo.js" strategy="afterInteractive" />
        <Script src="/js/commonroom.js" strategy="afterInteractive" />
      </Head>
      <body>
        <PostHogProvider>
          <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase={siteData.docsSource}
            editLink={null}
            feedback={{
              content: 'Question? Give us feedback',
              link: 'https://github.com/svix/svix-webhooks/discussions/new?category=general',
            }}
            footer={footer}
          >
            {children}
          </Layout>
        </PostHogProvider>
      </body>
    </html>
  )
}
