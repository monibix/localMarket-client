import React from 'react';
import { Input } from './style';
import { useHistory } from "react-router-dom"

const initialState = {title:"", price:"", category:"", ref:"", description:"", image:""}

function Searchbar() {
    const history = useHistory()
    const [searchedProducts, setSearchedProducts] = React.useState("")

    const handleSearchBar = (e) => {
        const input = e.target.value;
        console.log("input", input)
        setSearchedProducts(input)
    }
    console.log("searchedproducts", searchedProducts)

    const handleSubmit = (e) => {
        e.preventDefault()
//export const getSearchProducts = (search) => mainApi.get(`/search?search=${search}`)
        history.push(`/query?query=${searchedProducts}`)
        setSearchedProducts("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                placeholder="search something..."
                onChange={handleSearchBar}
                value={searchedProducts}
                />
            <button type="submit">Search</button>
        </form>    
    )

}

export default Searchbar;


// const handleSearchBar = (e) => {
//     const input = e.target.value
//     console.log("input", input)
//     setProducts(product=>product.filter(item=>item.title.toLowerCase().includes(input)))
// }

// <SearchBar 
//                         type="text" 
//                         placeholder="Search your products..." 
//                         onChange={handleSearchBar} 
//                         value={products.title}  />