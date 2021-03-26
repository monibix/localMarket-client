import React from 'react';
import * as S from './style';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProductForm from '../../components/ProductForm/ProductForm'

function AddProduct() {

    return (
        <div>
            <Navbar/>
            <S.MyAreaContainer>
                <Sidebar/>
                <div className="content">
                    <h3>Crea un producto</h3>
                    <ProductForm/>
                </div>
            </S.MyAreaContainer>
        </div>
    )
}

export default AddProduct;