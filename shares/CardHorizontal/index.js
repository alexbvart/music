import React, { useState } from 'react';

import horizontal from './horizontal.module.css'
const CardHorizontal = ({children, img, title}) => {
    return (
        <>
            <article className={horizontal.card_horizontal}>
                <img className={horizontal.card_horizontal_image} src={img} alt={title} loading="lazy" /> {title}
            </article>
        </>
    );
}
export default CardHorizontal;