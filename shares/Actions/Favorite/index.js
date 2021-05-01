import React, {useState} from 'react';

import Favorite from '../../icon/Favorite'
import FavoriteActive from '../../icon/Favorite/active'

const FavoriteButton = () => {

    const [favorite, setFavorite] = useState(false)

    return ( 
        <div onClick={() => {setFavorite(!favorite)}}>
            {favorite
                ? <FavoriteActive />
                : <Favorite />
            }
        </div>
    );
}
export default FavoriteButton;