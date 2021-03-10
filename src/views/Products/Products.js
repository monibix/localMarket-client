import React from 'react';
import {Div} from './style'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { useProducts } from '../../context/ProductsContext.utils';
import { Link } from 'react-router-dom';

function Products() {

    const { products, getMyProducts } = useProducts();
    console.log("products en products view", products) //undefined!!
    

    React.useEffect(()=>{
        getMyProducts()
    },[])

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Div>
                <Sidebar/>
                <div className="content">
                    <h1>Products</h1>
                    {
                        products.map((item, key)=>{
                            return (
                                <div key={key}>
                                    <h3> {item.title} </h3>
                                    <h3> {item.price} </h3>
                                    <p>{item._id}</p>
                                    <p> {item.seller} </p>
                                    <Link to={`/products/${item._id}`} ><p>Product Details</p></Link>
                                    <button>Delete Product</button>
                                </div>
                            )
                        })
                    }
                </div>
            </Div>
        </div>
    )
}

export default Products;