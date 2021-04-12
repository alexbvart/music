import Head from 'next/head'

import Hero from '../components/Hero'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <>
{/*           <Hero></Hero> */}
          <Section title="Liked" subtitle="song"></Section>
          <Section title="Recently" subtitle="song"></Section>
          <Section title="Top" subtitle=""></Section>
          <Section title="Playlist" subtitle="list" isPlayList={true}></Section>
    </>

  )
}
