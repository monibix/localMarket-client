import React from "react";
import { Div } from "./styles";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useProducts } from "../../context/ProductsContext.utils";
import { useParams, Link } from "react-router-dom";

function MyProductDetails() {
  const { productId } = useParams();
  const { products, getMyProduct } = useProducts();

  React.useEffect(() => {
    getMyProduct(productId);
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Div>
        <Sidebar />
        <div className="content">
          <h1>My Product Details</h1>
          <h4> {products.title} </h4>
          <h4> {products.price} </h4>
          <h4> {products.category} </h4>
          <h4> {products.ref} </h4>
          <h4> {products.description} </h4>
          <h4> {products.mainImage} </h4>
          <Link to={`/products/${products._id}/edit`}>Edit product</Link>
        </div>
      </Div>
    </div>
  );
}

export default MyProductDetails;
