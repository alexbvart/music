import React from 'react';
import HeroAllPages from '../../components/HeroAllPages';
import CarrouselVertical from '../../components/CarrouselVertical'
import Head from 'next/head'


import useColorBase from '../../hooks/useColorBase'

const Album = ({ datalist }) => {

    const [colorBase,baseGradient] = useColorBase(datalist)

    return (
        <>
            <Head>
                <title>{datalist.title} </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content={colorBase} />
            </Head>
            
            <main>
                <HeroAllPages data={datalist} />
                <CarrouselVertical list={datalist.tracks.data} />
            </main>

                <style global jsx>{`
                :root{
                    --base-home-gradient: ${baseGradient}
                    ;
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
export default Album;

Album.getInitialProps = async (context) => {

    const { query } = context;
    const { id } = query;
    const type = "album"

    return fetch(`https://api.deezer.com/${type}/${id}`)
        .then(res => res.json())
        .then(response => {
            const datalist = response;
            return { datalist }
        })
}