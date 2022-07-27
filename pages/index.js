import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const socials = [
  {id: "instagram", url: "https://www.instagram.com/interior_smartdesign", icon: faInstagram, description: "Realizacje i projekty"},
  {id: "pinterest", url: "https://pl.pinterest.com/ewa_swiderska", icon: faPinterest, description: "Inspiracje"},
  {id: "email", url: "mailto:ewa@warzynska.pl", icon: faEnvelope, description: "Kontakt"},
]

export default function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center text-gold-100 bg-background">
      <Head>
        <title>Ewa Warzyńska smartDesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex relative w-screen h-screen justify-center">
        <div className="flex flex-col justify-center w-1/2">
          <div className="flex flex-col justify-center items-center mx-auto">
            <img src="/profile.jpg"
                 className="rounded-full w-32 h-32 dark:opacity-75 shadow-xl"
            />
            <h1 className="text-2xl font-bold text-center">
              Ewa Warzyńska smartDesign
            </h1>
          </div>
          <ul className="flex justify-center items-center text-6xl mt-4 pt-4 border-t border-gold-800 space-x-8">
            { socials.map(social =>
              <li key={social.id}>
                <a href={social.url} alt={social.description}>
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              </li>
            )}
          </ul>
        </div>
      </main>
    </div>
  )
}
