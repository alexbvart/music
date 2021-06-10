import React from 'react';


import CarrouselVertical from '../../components/CarrouselVertical'
import Head from 'next/head'
import Section from '../../components/Section';
import ArtistBadge from '../../shares/ArtistBadge';
import SectionOfArtist from '../../shares/SectionOfArtist'

const Search = ({ tracks,albums,playlists, artists}) => {

console.log({ tracks},{albums});


    return (
        <>
            <Head>
{/*                 <title>{datalist.title} </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content={colorBase} /> */}
            </Head>
            
            <main>
{/*                 <HeroAllPages data={datalist}></HeroAllPages>*/}
                <CarrouselVertical list={tracks} title="Tracks" /> 
                <Section key="albums" list={albums} title="Albums" subtitle="song" ></Section>
                <Section key="playlist" list={playlists} title="Playlists" subtitle="song" ></Section>
                <SectionOfArtist list={artists} title="Artist" subtitle=""  />

            </main>


            

            <style global jsx>{`
                @media screen and (max-width: 560px) {
                        main{
                            z-index:99999;
                        }
                }
            `}</style>

        </>
    );
}
export default Search;


export async function getServerSideProps(context) {
    const { params } = context;
    const { query } = params;

        const tracks = await fetch(`http://localhost:5000/v1/search/track?query=${query}`)
        .then(res => res.json())
        const albums = await fetch(`http://localhost:5000/v1/search/album?query=${query}`)
        .then(res => res.json())
        const playlists = await fetch(`http://localhost:5000/v1/search/playlist?query=${query}`)
        .then(res => res.json())
        const artists = await fetch(`http://localhost:5000/v1/search/artist?query=${query}`)
        .then(res => res.json())




    return {
        props: {
            tracks: tracks.data,
            albums: albums.data,
            playlists: playlists.data,
            artists: artists.data,
        }
    };



}