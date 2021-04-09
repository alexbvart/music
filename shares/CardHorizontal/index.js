import React, { useState } from 'react';

import horizontal from './horizontal.module.css'
const CardHorizontal = ({children, img, title}) => {
    return (
        <>
            <article className={horizontal.card_horizontal}>
                <img src={img} alt={title} loading="lazy" /> {title}
            </article>
        </>
    );
}
export default CardHorizontal;