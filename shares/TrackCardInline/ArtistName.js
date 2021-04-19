import React, { useState } from 'react';
const ArtistName = ({ artist }) => {

    if (Array.isArray(artist)) {
        return (
            <>
                {
                    artist.map((a) => (
                        <span className="description-font-size-medium">
                            {a.name}
                        </span>
                    ))
                }
            </>
        );
    }
    else {
        return (
            <>
                <span className="description-font-size-medium">
                    {artist.name}
                </span>
            </>
        );
    }


}
export default ArtistName;