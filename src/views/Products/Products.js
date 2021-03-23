import React from 'react';
import { Div, ProductCardContainer, ProductCard, Button, SearchBar } from './style';
import AddProductImg from '../../assets/AddProductImg.png'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { useProducts } from '../../context/ProductsContext.utils';
import { Link, useHistory } from 'react-router-dom';
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";

function Products() {

    const { products, getMyProducts, deleteProduct, searchMyProducts, setProducts } = useProducts();
    console.log("products en products view", products) 
    
    const history = useHistory()

    React.useEffect(()=>{
        getMyProducts()
    },[])

    const handleSearchBar = (e) => {
        const input = e.target.value
        console.log("input", input)
        setProducts(product=>product.filter(item=>item.title.toLowerCase().includes(input)))
        //searchMyProducts(input)
        console.log("searchMyProducts", products)

    }

    const handleDelete = async (id) => {
        console.log("delete")
        await deleteProduct(id)
        history.push("/products")
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Div>
                <Sidebar/>
                <div className="content">
                    <h1>Products</h1>
                    <SearchBar 
                        type="text" 
                        placeholder="Search your products..." 
                        onChange={handleSearchBar} 
                        value={products.title}  
                    />

                    <ProductCardContainer>
                        {
                            products.map((item, key)=>{
                                return (
                                    <div>
                                    <ProductCardComp 
                                        title={item.title} 
                                        price={item.price} 
                                        mainImage={item.mainImage} 
                                        link={`/products/${item._id}`} />
                                    <Link to={`/products/${item._id}`} ><Button>View Product</Button></Link>
                                    <Link to={`/products/${item._id}/edit`}><Button>Edit product</Button></Link>
                                    <Link><Button onClick={()=>handleDelete(item._id)}>Delete Product</Button></Link>
                                    </div>
                                )
                            })
                        }
                        
                        <Link to="/add">
                            <ProductCard>
                                <img src={AddProductImg} width='150px' text-align='center' alt="añadir producto"/>
                                <h3>Añadir producto</h3>
                            </ProductCard>
                        </Link>
                    </ProductCardContainer>
                </div>
            </Div>
        </div>
    )
}

export default Products;