import React from 'react';
import { Div, Img, Head, P, H4, Description, ButtonsDiv, Buttons } from './styles'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useProducts } from '../../context/ProductsContext.utils';
import { useParams, Link, useHistory } from 'react-router-dom';
import {deleteProduct} from "../../service/products.service";


function MyProductDetails() {
    const {productId} = useParams()
    console.log("productparams", productId)
    const history = useHistory()

    const { products, getMyProduct } = useProducts();
    console.log("single product", products)

    React.useEffect(()=>{
        getMyProduct(productId)
    }, [])

    const handleDelete =async (id) => {
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
                    <Head>

                        <div>
                            <Img src={products.mainImage} alt="product details"/>
                        </div>
                        <div className="title-section">
                            <h1> {products.title} </h1>
                            <P> Ref: {products.ref} </P>
                            <h2> {products.price} €</h2>
                        </div>
                    </Head>
                    <Description>
                        <H4>Descripción</H4>
                        <p> {products.description} </p>
                    </Description>
                    <ButtonsDiv>
                        <Link to={`/products/${products._id}/edit`}> <Buttons> Edit product </Buttons></Link>
                        <Buttons onClick={()=>handleDelete(products._id)}> Delete product </Buttons>
                    </ButtonsDiv>
                </div>
            </Div>
        </div>
    )

}

export default MyProductDetails;