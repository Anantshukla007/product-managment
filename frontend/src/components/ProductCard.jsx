// src/components/ProductCard.jsx
import React from 'react';
import ImageSlider from './ImageSlider';

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Slider */}
      <ImageSlider images={product.images} />

      {/* Product Details */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {product.category?.name || 'No Category'}
          </span>
          {product.subCategory && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {product.subCategory.name}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price?.toFixed(2)}
          </span>
          
          {/* View Details Button */}
          <button
            onClick={() => onViewDetails(product)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            View Details
          </button>
        </div>

        {/* Stock Status */}
        {product.stock !== undefined && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <span className={`text-xs font-medium ${
              product.stock > 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;