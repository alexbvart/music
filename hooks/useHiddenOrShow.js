import { useEffect, useState } from 'react'

function useHiddenOrShow() {

    const [showSearchBar, setShowSearchBar] = useState(false)
    useEffect(() => {
        console.log(showSearchBar);
    }, [showSearchBar])

    return [showSearchBar,setShowSearchBar]
}

export default useHiddenOrShow
