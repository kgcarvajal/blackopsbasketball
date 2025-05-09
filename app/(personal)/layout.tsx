import '@/styles/index.css'
import './globals.css'
import {CustomPortableText} from '@/components/CustomPortableText'
import {Navbar} from '@/components/Navbar'
import IntroTemplate from '@/intro-template'
import {sanityFetch, SanityLive} from '@/sanity/lib/live'
import {homePageQuery, settingsQuery} from '@/sanity/lib/queries'
import {urlForOpenGraphImage} from '@/sanity/lib/utils'
import type {Metadata, Viewport} from 'next'
import {toPlainText, VisualEditing, type PortableTextBlock} from 'next-sanity'
import {IBM_Plex_Mono, Inter, PT_Serif} from 'next/font/google'
import {draftMode} from 'next/headers'
import {Suspense} from 'react'
import {Toaster} from 'sonner'
import {handleError} from './client-functions'
import {DraftModeToast} from './DraftModeToast'

const serif = PT_Serif({
  variable: '--font-serif',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  weight: ['400', '700'],
})
const sans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  // @todo: understand why extrabold (800) isn't being respected when explicitly specified in this weight array
  // weight: ['500', '700', '800'],
})
const mono = IBM_Plex_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['500', '700'],
})

export async function generateMetadata(): Promise<Metadata> {
  const [{data: settings}, {data: homePage}] = await Promise.all([
    sanityFetch({query: settingsQuery, stega: false}),
    sanityFetch({query: homePageQuery, stega: false}),
  ])
  const ogImage = urlForOpenGraphImage(
    // @ts-expect-error - @TODO update @sanity/image-url types so it's compatible
    settings?.ogImage,
  )
  return {
    title: homePage?.title
      ? {
          template: `%s | ${homePage.title}`,
          default: homePage.title || 'Personal website',
        }
      : undefined,
    description: homePage?.overview ? toPlainText(homePage.overview) : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const {data} = await sanityFetch({query: settingsQuery})
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable} ${serif.variable}`}>
      <body>
        <div className="flex min-h-screen flex-col bg-white text-black">
          <Navbar data={data} />
          <div className="mt-20 flex-grow px-4 md:px-16 lg:px-32">{children}</div>
          <footer className="bottom-0 w-full bg-white py-12 text-center md:py-20">
            {data?.footer && (
              <CustomPortableText
                id={data._id}
                type={data._type}
                path={['footer']}
                paragraphClasses="text-md md:text-xl"
                value={data.footer as unknown as PortableTextBlock[]}
              />
            )}
          </footer>
          <Suspense>
            <IntroTemplate />
          </Suspense>
        </div>
        <Toaster />
        <SanityLive onError={handleError} />
        {(await draftMode()).isEnabled && (
          <>
            <DraftModeToast />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  )
}
