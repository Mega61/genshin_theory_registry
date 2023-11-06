import type { NextPage } from 'next';
import Head from 'next/head';
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-dark">
      <Head>
        <title>Genshin Impact Theories</title>
        <meta name="description" content="Explore the latest theories about Genshin Impact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-purple text-gray-dark">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold">Genshin Theories</div>
            <div className="space-x-4">
              <a href="#" className="hover:text-gray">Home</a>
              <a href="#" className="hover:text-gray">Theories</a>
              <a href="#" className="hover:text-gray">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="bg-blue text-white text-center py-20">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-Merriweather mb-4">Unravel the Mysteries of Teyvat</h1>
            <p className="font-sans text-lg text-gray-dark bg-orange inline-block p-3 rounded-4xl">
              Join the adventure and share your theories!
            </p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-10">
          <h2 className="text-4xl font-serif text-purple text-center mb-10">Featured Theories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Repeat this block for each theory */}
            <div className="bg-white rounded-4xl overflow-hidden shadow-lg p-5">
              <img src="/theory-thumbnail.jpg" alt="Theory Thumbnail" className="w-full h-64 object-cover mb-4 rounded-4xl" />
              <h3 className="text-2xl font-serif text-purple mb-2">The Hidden Truth of the Abyss</h3>
              <p className="text-gray-dark mb-4">Explore the depths of the Abyss and its untold secrets...</p>
              <a href="#" className="text-green-600 hover:underline">Discover more</a>
            </div>
            {/* End of theory block */}
          </div>
        </section>
      </main>

      <footer className="bg-gray-dark text-white text-center py-4">
        <p className="font-sans">&copy; {new Date().getFullYear()} Genshin Theories. All rights reserved.</p>
      </footer>
    </div>
  )
}
