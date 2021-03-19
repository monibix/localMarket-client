import React from 'react';
import { Input, Form } from './style';
import { useHistory } from "react-router-dom";
import * as S from "../../commons/commons.style";


function Searchbar() {
    const history = useHistory()
    const [searchedProducts, setSearchedProducts] = React.useState("")

    const handleSearchBar = (e) => {
        const input = e.target.value;
        console.log("input", input)
        setSearchedProducts(input)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
//export const getSearchProducts = (search) => mainApi.get(`/search?search=${search}`)
        history.push(`/query?query=${searchedProducts}`)
        setSearchedProducts("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                placeholder="search something..."
                onChange={handleSearchBar}
                value={searchedProducts}
                />
            <S.Button type="submit">Search</S.Button>
        </Form>    
    )

}

export default Searchbar;
