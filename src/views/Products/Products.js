import React from 'react';
import {Div} from './style'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { useProducts } from '../../context/ProductsContext.utils';

function Products() {

    const { products, setProducts} = useProducts();
    console.log("products en products view", products) //undefined!!

    React.useEffect(()=>{
        setProducts()
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
                    {/* {
                        products.map((item, key)=>{
                            return (
                                <div className={key}>
                                    <h3> {item.title} </h3>
                                    <h3> {item.price} </h3>
                                </div>
                            )
                        })
                    } */}
                </div>
            </Div>
        </div>
    )
}

export default Products;