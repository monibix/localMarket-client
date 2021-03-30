import React from 'react';
import { Button } from "../../commons/commons.style";
import * as S from "./styles";
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useProducts } from '../../context/ProductsContext.utils';
import { useParams, Link, useHistory } from 'react-router-dom';
import {deleteProduct} from "../../service/products.service";
import ProductSheet from "../../components/ProductSheet/ProductSheet";

function MyProductDetails() {
    const {productId} = useParams()
    const history = useHistory()

    const { product, getMyProduct, cleanProduct } = useProducts()

    React.useEffect(()=>{
        getMyProduct(productId);
        return () => cleanProduct()
    }, [productId])

    const handleDelete =async (id) => {
        await deleteProduct(id)
        history.push("/products")
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <S.MyAreaContainer>
                <Sidebar/>
                <div className="content">
                    <h3>Detalle de producto</h3>

                        <ProductSheet                 
                            mainImage={product?.mainImage} 
                            title={product?.title} 
                            reference={product?.ref} 
                            price={product?.price} 
                            description={product?.description} 
                            userImage={product?.userImage} 
                            userDescription={product?.description}
                            link={`/profile`} 
                        />

                    <div>
                        <Link to={`/category/${product?._id}`}> <Button> Ver online </Button></Link>
                        <Link to={`/products/${product?._id}/edit`}> <Button> Editar producto </Button></Link>
                        <Button onClick={()=>handleDelete(product?._id)}> Borrar producto </Button>
                    </div>
                </div>
            </S.MyAreaContainer>

        </div>
    )

}

export default MyProductDetails;