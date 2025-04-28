import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./Products"

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-20 text-2xl">Product Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-20 mt-10 px-5">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg mb-6" />
        <h1 className="text-4xl font-bold text-green-700">{product.name}</h1>
        <p className="text-gray-700 text-lg mt-4">{product.description}</p>
        {/* <h2 className="text-2xl font-semibold mt-6 text-green-700">Price: {product.price}</h2> */}
        <h3 className="text-xl font-semibold mt-6">Nutrient Details:</h3>
        <p className="text-gray-600 mt-2">{product.nutrients}</p>

        <Link
          to="/products"
          className="inline-block mt-8 bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
