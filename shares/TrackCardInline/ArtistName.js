import React from 'react'
import Link from 'next/link'

const ArtistName = ({ artist }) => {

    if (Array.isArray(artist)) {
        return (
            <>
                {
                    artist.map((a) => (
                        <span className="description-font-size-medium">
                            <Link href={`/artist/${a.id}`}>
                                <a>{a.name}</a>
                            </Link>
                        </span>
                    ))
                }
                <style jsx>{`
                    span a{
                        margin-right: 12px;
                    }
                `}</style>

            </>
        );
    }
    else {
        return (
            <>
                <span className="description-font-size-medium">
                    <Link href={`/artist/${artist.id}`}>
                        <a>{artist.name}</a>
                    </Link>
                </span>
            </>
        );
    }


}
export default ArtistName;