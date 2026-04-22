import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import '../globals.css'
import Image from 'next/image'
import Script from 'next/script'
import { PostHogProvider } from '../components/providers/PostHogProvider'
import { ReactNode } from 'react'
import { PageMapItem } from 'nextra'

const siteData = {
  name: 'Svix Docs',
  tagline: 'Webhooks as a service',
  description: 'Svix makes sending webhooks easy and reliable. Documentation for sending, receiving, and operating webhooks with Svix.',
  productionUrl: 'https://docs.svix.com',
  repo: 'https://github.com/svix/svix-webhooks',
  docsSource: 'https://github.com/svix/svix-docs',
} as const

export const metadata = {
  metadataBase: new URL(siteData.productionUrl),
  description: siteData.description,
  title: {
    default: `${siteData.name} – ${siteData.tagline}`,
    template: `%s | ${siteData.name}`,
  },
  openGraph: {
    url: siteData.productionUrl,
    siteName: siteData.name,
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/img/socialbanner.png', width: 1200, height: 630, alt: siteData.name }],
  },
}

const navbar = (
  <Navbar
    align="left"
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
    projectLink={siteData.repo}
  >
  </Navbar>
)

const footer = <Footer>Copyright © Svix</Footer>

const SECTION_ROOTS = new Set([
  "stream",
  "ingest",
  "receiving"
]);

type DocsLayoutParams = {
  mdxPath?: string[];
};

type DocsLayoutProps = {
  children: ReactNode;
  params: Promise<DocsLayoutParams>;
};

// This is a small hack to hide the top-level pages (for Svix dispatch) when the user is in the Ingest/Stream/Receiving sections.
// We have to do it because dispatch pages are not under its own sub-section (/dispatch/*), they live at the root, and Nextra doesn't work well with that.
async function getNestedPageMap(mdxPath: string[]): Promise<PageMapItem[]> {
  const topLevelSegment = mdxPath?.[0];
  const pageMapRoute =
    topLevelSegment && SECTION_ROOTS.has(topLevelSegment)
      ? `/${topLevelSegment}`
      : "/";
  return await getPageMap(pageMapRoute);
}

export default async function DocsLayout({ children, params }: DocsLayoutProps) {
  const resolvedParams = await params;
  const pageMap = await getNestedPageMap(resolvedParams.mdxPath);

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
            pageMap={pageMap}
            docsRepositoryBase={siteData.docsSource}
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
