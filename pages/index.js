import Head from 'next/head'

import Hero from '../components/Hero'
import Section from '../components/Section'
import SectionWrapper from '../components/Section/SectionWrapper'
import styles from '../styles/Home.module.css'

export default function Home({ datalist }) {
  return (

    <>
      <Head>
        <title>Auxona </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <Hero></Hero>
      <SectionWrapper>
        <Section id="Liked" list={datalist.tracks.data} title="Liked" subtitle="song" ></Section>
        <Section id="Recently" list={datalist.tracks.data} title="Recently" subtitle="song" ></Section>
        <Section id="Topp" list={datalist.tracks.data} title="Top" subtitle="song" ></Section>
        <Section id="Playlist" list={datalist.playlists.data} title="Playlist" subtitle="list" ></Section>
      </SectionWrapper>
      {/*           <Section list={datalist.artists.data} title="Recently" subtitle="song"></Section>
          <Section list={datalist.albums.data} title="Top" subtitle=""></Section>
          <Section list={datalist.playlists.data} title="Playlist" subtitle="list" isPlayList={true}></Section> */}
    </>

  )
}
Home.getInitialProps = async (context) => {


  return fetch(`https://api.deezer.com/chart/`)
    .then(res => res.json())
    .then(response => {
      const datalist = response;
      return { datalist }
    })
}