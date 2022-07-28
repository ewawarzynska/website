import Head from 'next/head'
import Image from 'next/image'
import profile from '../public/profile.jpg'
import logo from '../public/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faSquarePhone,
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

      <div className="grow flex flex-col w-screen h-screen">
        <main className="flex relative w-screen h-screen justify-center">
          <div className="flex flex-col justify-center w-1/2 space-y-4">
            <div className="flex flex-col justify-center items-center mx-auto space-y-2">
              <Image src={profile} alt="Ewa Warzyńska"
                className="rounded-full w-32 h-32 dark:opacity-75 shadow-xl"
              />
              <h1 className="text-2xl font-bold text-center">
                Ewa Warzyńska smartDesign
              </h1>
            </div>
            <ul className="flex justify-center items-center text-6xl pt-4 border-t border-gold-800 space-x-8">
              { socials.map(social =>
                <li key={social.id} className="hover:text-gold-800">
                  <a href={social.url} alt={social.description}>
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                </li>
              )}
            </ul>
          </div>
        </main>

        <footer className="shrink-0 flex gap-4 h-24 w-full items-center justify-center border-t border-gold-900 text-gold-900">
          <Image src={logo} alt="smartDesign Logo" />
          <div className="flex flex-col items-left justify-center text-[12px]">
            <a href="https://goo.gl/maps/xKcPkXjb8P24rTzz8" target="_blank" rel="noopener noreferrer" className="flex flex-col items-left justify-center text-[12px]">
              <p>Ewa Warzyńska smartDesign</p>
              <p>Rubinowa 13a, 55-040 Tyniec Mały</p>
              <p>NIP: 7542509844</p>
            </a>
            <a href="tel:+48609088189" className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faSquarePhone} />
              <span>+48 609 088 189</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
