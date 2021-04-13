import React from 'react';
import HeroAllPages from '../../components/HeroAllPages';
import CarrouselVertical from '../../components/CarrouselVertical'

import { useRouter } from 'next/router'
import { usePalette } from 'react-palette'

const Playlist = ({ datalist }) => {

    const router = useRouter()
    const { id } = router.query;

    console.log(datalist);
    const { data, loading, error } = usePalette(datalist.picture_medium)

    console.log("color: ", data, error);
    const color = data.darkVibrant;

    return (
        <>
            <main>
                <HeroAllPages data={datalist}></HeroAllPages>
                <CarrouselVertical list={datalist.tracks.data} />
            </main>

            <style global jsx>{`
                :root{
                    --base-home-gradient: 
                    linear-gradient(341.09deg, #131213 50%, ${color}  100%);
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
export default Playlist;

Playlist.getInitialProps = async (context) => {

    const { query } = context;
    const { id } = query;
    const type = "playlist"

    return fetch(`https://api.deezer.com/${type}/${id}`)
        .then(res => res.json())
        .then(response => {
            const datalist = response;
            return { datalist }
        })
}