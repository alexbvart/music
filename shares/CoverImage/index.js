import React from 'react'
import Image from 'next/image'
;
const CoverImage = ({
    className,
    alt,
    width=64,
    height=width,
    src,
}) => {
    return ( 
        <>
            <Image
                src={src} 
                className={className}
                width={width} 
                height={height}
                loading="lazy"
                alt={alt} 
                layout="fixed"

                />
{/*                                 srcSet={`
                        ${medium}  2x, 
                        ${medium}  560w, 
                        ${big}     560w 2x, 
                        ${big}     860w, 
                        ${xl}      860w 2x` } */}
            <style global jsx>{`
                img{
                    width: ${width}px;
                    height: ${height}px;
                    border-radius: 12px;
                }
            `}</style>
        </>
    );
}
export default CoverImage;