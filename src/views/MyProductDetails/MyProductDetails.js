import React from 'react';
import { Div } from './styles'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useProducts } from '../../context/ProductsContext.utils';
import { useParams } from 'react-router-dom';

function MyProductDetails() {
    const {productId} = useParams()
    //const {productParams} = useParams()
    console.log("productparams", productId)

    const { products, getMyProduct } = useProducts();
    console.log("single product", products)

    React.useEffect(()=>{
        getMyProduct(productId)
    }, [])

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <Div>
                <Sidebar/>
                <div className="content">
                    <h1>My Products Details</h1>
                    <h4> {products.title} </h4>
                </div>
            </Div>
        </div>
    )

}

export default MyProductDetails;