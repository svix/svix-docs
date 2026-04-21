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
    images: [{ url: '/img/socialbanner.png', width: 1200, height: 630, alt: siteData.name }],
  },
}

const navLinkClass =
  'x:text-sm x:font-medium x:text-fd-muted-foreground hover:x:text-fd-foreground x:transition-colors'

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

// FIXME(lucho): this is a hack
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
