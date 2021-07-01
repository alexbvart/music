import React from 'react';
import { useRouter } from 'next/router'

import CarrouselVertical from '../../components/CarrouselVertical'
import Head from 'next/head'
import Section from '../../components/Section';

import SectionOfArtist from '../../shares/SectionOfArtist'

const Search = ({ tracks,albums,playlists, artists}) => {

    const router = useRouter()


    return (
        <>
            <Head>
                <title>{ router.query.query} </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
{/*                  <meta name="theme-color" content={colorBase} /> */}
            </Head>
            
            <main>
                <header className="wrapper-margin" >
                    <h1 className="title-for-section"> Results of { router.query.query} :</h1>
                </header>

                {tracks.length>0  && <CarrouselVertical list={tracks} title="Tracks" /> }
                {albums.length>0  && <Section key="albums" list={albums} title="Albums" subtitle="song" />}
                {playlists.length>0 && <Section key="playlist" list={playlists} title="Playlists" subtitle="song" />}
                {artists.length>0 && <SectionOfArtist list={artists} title="Artist" subtitle=""  />}

            </main>

            <style jsx>{`
                h1  {
                    margin-top: 64px;
                    margin-bottom: 32px
                }
            `}</style>
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
    const SERVER_HOST = "https://backend-musi.herokuapp.com";

        const tracks = await fetch(`${SERVER_HOST}/v1/search/track?query=${query}`)
        .then(res => res.json())
        const albums = await fetch(`${SERVER_HOST}/v1/search/album?query=${query}`)
        .then(res => res.json())
        const playlists = await fetch(`${SERVER_HOST}/v1/search/playlist?query=${query}`)
        .then(res => res.json())
        const artists = await fetch(`${SERVER_HOST}/v1/search/artist?query=${query}`)
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