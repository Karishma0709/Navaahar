import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./Products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-red-600 mt-10">Product not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-20 px-6 py-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-green-700 mb-6 border-b pb-2">{product.name}</h1>

      <p className="text-gray-800 text-lg mb-6">{product.description}</p>

      {/* Instructions */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">Instructions</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {product.instructions.usage.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>

      {/* Feeding Schedule Table */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">Feeding Schedule</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-green-100 text-green-900">
              <tr>
                <th className="px-4 py-2 border">Animal Type</th>
                <th className="px-4 py-2 border">Cow</th>
                <th className="px-4 py-2 border">Buffalo</th>
              </tr>
            </thead>
            <tbody>
              {product.instructions.feedingSchedule.map((schedule, index) => (
                <tr key={index} className="text-center text-gray-800 hover:bg-gray-100">
                  <td className="px-4 py-2 border font-medium">{schedule.type}</td>
                  <td className="px-4 py-2 border">{schedule.cow}</td>
                  <td className="px-4 py-2 border">{schedule.buffalo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Nutrients */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">Nutrients</h2>
        <p className="text-gray-700">{product.nutrients}</p>
      </div>

      {/* Ingredients */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {product.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {product.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Note */}
      <p className="text-lg text-red-600 font-medium mt-6 bg-red-50 p-4 rounded-md border border-red-200">
        <strong>Note:</strong> {product.note}
      </p>
    </div>
  );
};

export default ProductDetails;
