import {HomePage} from '@/components/HomePage'
import {studioUrl} from '@/sanity/lib/api'
import {sanityFetch} from '@/sanity/lib/live'
import {homePageQuery} from '@/sanity/lib/queries'
import Link from 'next/link'

type Props = {
  params: {
    slug: string
    projectID: string
  }
}

export default async function ProjectListingPage({params}: Props) {
  const {data} = await sanityFetch({query: homePageQuery})
  if (!data) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{' '}
        <Link href={`${studioUrl}/structure/home`} className="underline">
          create one now
        </Link>
        !
      </div>
    )
  }
  return <HomePage data={data} />
}
