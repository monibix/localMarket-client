import React from 'react';
import * as S from "./style";
import { ProductCard, Button } from './style';
import { MyAreaContainer, ProductCardContainer } from "../../commons/commons.style"
import AddProductImg from '../../assets/AddProductImg.png'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import { useProducts } from '../../context/ProductsContext.utils';
import { Link, useHistory } from 'react-router-dom';
import ProductCardComp from "../../components/ProductCardComp/ProductCardComp";

function Products() {

    const { products, getMyProducts, deleteProduct, setProducts } = useProducts();    
    const history = useHistory()

    React.useEffect(()=>{
        getMyProducts()
    },[]) 

    const handleSearchBar = (e) => {
        const input = e.target.value
        setProducts(product=>product.filter(item=>item.title.toLowerCase().includes(input)))
    }

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro que quieres borrar este producto?')) {
            await deleteProduct(id)
            history.push("/products")
        }
    }

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <S.MyAreaContainer>
                <Sidebar/>
                <div className="content">
                <h3>Gestiona tus productos</h3>
                    <S.SearchBar 
                        type="text" 
                        placeholder="Busca aquí tus productos. . ." 
                        onChange={handleSearchBar} 
                        value={products.title}  
                    />

                    <S.ProductCardContainer>
                        {
                            products.map((item, key)=>{
                                return (
                                    <div key={item._id}>
                                    <ProductCardComp 
                                        title={item.title} 
                                        price={item.price} 
                                        mainImage={item.mainImage} 
                                        link={`/products/${item._id}`} 
                                    />
                                    <div className="control-btns-container">
                                        <Link to={`/products/${item._id}`} >
                                            <button>VER</button>
                                        </Link>
                                        <Link to={`/products/${item._id}/edit`}>
                                            <button>EDITAR</button>
                                        </Link>
                                        <button onClick={()=>handleDelete(item._id)}>BORRAR</button>
                                    </div>
                                    </div>
                                )
                            })
                        }
                        
                        <Link to="/add">
                            <S.AddNewProductCard>
                                <div className="card-image">
                                    <img src={AddProductImg} width='150px' text-align='center' alt="añadir producto"/>
                                </div>
                                <div className="card-content">
                                    <h3 className="title">Añadir producto</h3>
                                </div>
                            </S.AddNewProductCard>
                        </Link>
                    </S.ProductCardContainer>
                </div>
            </S.MyAreaContainer>
        </div>
    )
}

export default Products;