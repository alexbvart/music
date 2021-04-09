import React from 'react';
import CardHorizontal from '../../shares/CardHorizontal';
import hero from './hero.module.css'
const Hero = () => {

    const cardHorizontal = [
        {
            title: "Mi top de marzo",
            img: "https://e-cdns-images.dzcdn.net/images/artist/61ffc3dcc4f3347c8c4f4e0ad3398c14-ce94c75205f183ee74ae52f505d8d4dd-2d589a03f59c82f9f9688b5010c66f8e-b7315a103baf193a29ac1fc921245de2/264x264-000000-80-0-0.jpg"
        },
        {
            title: "Lunes de descubrimiento",
            img: "https://e-cdns-images.dzcdn.net/images/artist/725895bb4ebc5259c951835c11107606-8eaf9ac68f793ace9aefb06c9fc606c9-e09f4a8976ec35c38f5f8b4dd4e20965-a2559795912a14fda90242d4b095a107/264x264-000000-80-0-0.jpg"
        },
    ];



    return (
        <>
            <div className={hero.hero}>
                <span className={hero.copy} >Listen to what you want</span>
                <article className={hero.flow}>Flow</article>
                <div className={hero.recommended}>
                    
                    {
                        cardHorizontal.map((card)  => (
                            <CardHorizontal title={card.title} img={card.img} />
                        ))
                    }
                </div>
            </div>
        </>
    );
}
export default Hero;