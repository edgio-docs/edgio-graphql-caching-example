import Missions from '@/components/Missions'
import Rockets from '@/components/Rockets'
import Head from 'next/head'

function ExternalLink({href, children}) {
  return (
    <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
    href={href} 
    target="_blank">
      {children}
    </a>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>🚀 To the Moon 🌙</title>
        <meta name="description" content="" />
      </Head>
      <main className="flex flex-col">
        <h1 className="font-bold text-2xl sm:text-5xl">🚀 To the Moon 🌙</h1>
        <div className="mt-5">This open source project demonstrates <ExternalLink href="https://docs.layer0.co/guides/graphql">GraphQL caching</ExternalLink> on the Layer0 platform using the <ExternalLink href="https://api.spacex.land/graphql/">SpaceX GraphQL API</ExternalLink>. </div>
        <div className="flex flex-row flex-wrap">
          <div className="mt-10 lg:mt-20 w-full lg:w-1/2 lg:pr-10 flex flex-col">
            <Missions />
          </div>
          <div className="mt-20 w-full lg:w-1/2 flex flex-col">
            <Rockets />
          </div>
        </div>

        <div className="mt-10 text-center">The caching commands used in this project can be viewed in the <ExternalLink href="https://github.com/layer0-docs/graphql-caching-example/blob/main/routes.js">Github repo</ExternalLink> and more details are available in the <ExternalLink href="https://docs.layer0.co/guides/graphql">GraphQL caching guide</ExternalLink>.</div>
      </main>
    </>
  )
}
