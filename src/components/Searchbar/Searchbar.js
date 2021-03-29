import React from 'react';
import { Input, Form } from './style';
import { useHistory } from "react-router-dom";
import * as S from "../../commons/commons.style";
import { Button } from "./style";


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
        history.push(`/query?query=${searchedProducts}`)
        setSearchedProducts("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                placeholder="Search something..."
                onChange={handleSearchBar}
                value={searchedProducts}
                />
            <Button type="submit">BUSCAR</Button>
        </Form>    
    )

}

export default Searchbar;
