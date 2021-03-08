import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

function Products() {

    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Sidebar/>
            </div>
            <div>
                <h1>Products</h1>
            </div>
        </div>
    )
}

export default Products;