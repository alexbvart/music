import Avatar from './Avatar'
import SearchBar from './SearchBar/SearchBar'
import header from './Header.module.css'
import Search from '../../shares/icon/Search'

import useHiddenOrShow from '../../hooks/useHiddenOrShow'
import useWindowDimension from '../../hooks/useWindowDimension'
import Close from '../../shares/icon/Close'


function Header() {

    const [showSearchBar, setShowSearchBar] = useHiddenOrShow(); 

    const windowDimensions = useWindowDimension();
    const { width } = windowDimensions


    const photo = "https://cdns-images.dzcdn.net/images/cover/0d78a41b433fef2949b6f1a4df64452e/250x250-000000-80-0-0.jpg"
    return (
        <header className={header.header}>

            {
                (showSearchBar) ?
                <>
                    <div onClick={() => setShowSearchBar(!showSearchBar)} className={header.search} >
                        <Close />
                    </div>
                    <SearchBar />
                </>
                :(width < 560) &&
                <div onClick={() => setShowSearchBar(!showSearchBar)} className={header.search} >
                    <Search />
                </div>
            }

            <Avatar userPhoto={photo} userName="alexbvart" id="alexbvart" />
        </header>
    )

}

export default Header
