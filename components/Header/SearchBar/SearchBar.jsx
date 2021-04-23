import React, { useState } from 'react';
import { useRouter } from 'next/router';

/* COMPONENTS */
import Wrapper48 from '../Wrapper48/Wrapper48';


/* ASSETS */
import Search from '../../../shares/icon/Search';

/* CSS */
import searchBar from './SearchBar.module.css'

const SearchBar = () => {

    const router = useRouter()
    const [keyword, setKeyword] = useState('')

    /* Funciunes para manejar el input y realizar la busqueda  {kewyword} */
    const handleSubmit = 
        (event) => {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    return (
        <>
            <Wrapper48 className={searchBar.searchBar}>
                <form onSubmit={handleSubmit} className={searchBar.form} >
                    <input onChange={handleChange} type="search" value={keyword} className={searchBar.input}/>
                    <button  className={searchBar.button}>
                            <Search />
                    </button>
                </form>
            </Wrapper48>
        </>
    );
}
export default SearchBar;