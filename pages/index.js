import Head from 'next/head'

import Hero from '../components/Hero'
import Section from '../components/Section'
import styles from '../styles/Home.module.css'

export default function Home({datalist}) {
  return (

    <>
          <Hero></Hero>
          <Section list={datalist.tracks.data} title="Liked" subtitle="song"></Section>
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