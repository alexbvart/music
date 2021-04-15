import React from 'react';
const CoverImage = ({
    alt,
    width=64,
    height=width,
    small,
    medium,
    big,
    xl
}) => {
    return ( 
        <>
            <img 
                width={width} 
                height={height}
                loading="lazy"
                alt={alt} 
                src={small} 
                srcSet={`
                        ${medium}  2x, 
                        ${medium}  560w, 
                        ${big}     560w 2x, 
                        ${big}     860w, 
                        ${xl}      860w 2x` }
                />
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