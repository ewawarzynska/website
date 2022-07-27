import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 text-gold-100 bg-background-900">
      <Head>
        <title>Ewa Warzyńska smartDesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Ewa Warzyńska smartDesign
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://www.instagram.com/interior_smartdesign/"
            className="mt-6 w-full md:w-64 rounded-xl border border-gold-900 p-6 text-left hover:text-gold-800 focus:text-gold-800"
          >
            <h3 className="text-2xl font-bold">Projekty &rarr;</h3>
            <p className="mt-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </a>

          <a
            href="https://pl.pinterest.com/ewa_swiderska/"
            className="mt-6 w-full md:w-64 rounded-xl border border-gold-900 p-6 text-left hover:text-gold-800 focus:text-gold-800"
          >
            <h3 className="text-2xl font-bold">Inspiracje &rarr;</h3>
            <p className="mt-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </a>

          <a
            href="mailto://ewa@warzynska.pl"
            className="mt-6 w-full md:w-64 rounded-xl border border-gold-900 p-6 text-left hover:text-gold-800 focus:text-gold-800"
          >
            <h3 className="text-2xl font-bold">Kontakt &rarr;</h3>
            <p className="mt-4 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
