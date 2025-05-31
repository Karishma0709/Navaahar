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
    <div className="max-w-7xl mx-auto mt-20 px-4 md:px-8 py-8 bg-white rounded-xl shadow-lg space-y-10">
      {/* Product Name and Description */}
      <div>
        <h1 className="text-4xl font-bold text-green-700 mb-4 border-b pb-2">
          {product.name}
        </h1>
        <p className="text-gray-800 text-lg">{product.description}</p>
      </div>

      {/* Key Instructions */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">खास बातें</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {product.instructions.usage.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>

      {/* Feeding Schedule */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">दैनिक खुराक</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-green-100 text-green-900">
              <tr>
                <th className="px-4 py-2 border">पशु का प्रकार</th>
                <th className="px-4 py-2 border">गाय</th>
                <th className="px-4 py-2 border">भैंस</th>
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

      {/* Ingredients */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          पशु आहार में उपयोग की गई सामग्री
        </h2>
        <div className="columns-2 md:columns-3 gap-4">
          {product.ingredients.map((ingredient, index) => (
            <div key={index} className="break-inside-avoid bg-white p-2 rounded shadow text-gray-700 mb-2">
              {ingredient}
            </div>
          ))}
        </div>
      </div>

      {/* Composition */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">COMPOSITION</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-green-100 text-green-900">
              <tr>
                <th className="px-4 py-2 border">INGREDIENT</th>
                <th className="px-4 py-2 border">SPECIFICATION</th>
              </tr>
            </thead>
            <tbody>
              {product.composition.map((comp, index) => (
                <tr key={index} className="text-center text-gray-800 hover:bg-gray-100">
                  <td className="px-4 py-2 border font-medium">{comp.ingredient}</td>
                  <td className="px-4 py-2 border">{comp.specification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Benefits</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {product.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Note */}
      <div className="bg-red-50 p-6 rounded-md border border-red-200">
        <h3 className="text-lg text-red-600 font-semibold mb-2">Note:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {product.note.map((notes, index) => (
            <li key={index}>{notes}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
