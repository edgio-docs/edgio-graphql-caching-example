import Missions from '@/components/Missions'
import Rockets from '@/components/Rockets'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>🚀 To the Moon 🌙</title>
        <meta name="description" content="" />
      </Head>
      <main className="flex flex-col">
        <h1 className="font-bold text-2xl sm:text-5xl">🚀 To the Moon 🌙</h1>
        <div className="flex flex-row flex-wrap">
          <div className="mt-10 lg:mt-20 w-full lg:w-1/2 lg:pr-10 flex flex-col">
            <Missions />
          </div>
          <div className="mt-20 w-full lg:w-1/2 flex flex-col">
            <Rockets />
          </div>
        </div>
      </main>
    </>
  )
}
