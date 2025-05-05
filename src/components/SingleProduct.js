import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import apiBaseService from '../services/apiBaseService.js'; // Ensure this service is correctly implemented

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get specific query parameters
  const productID = queryParams.get('pid');

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const url= `/products/${productID}`;
      const response = await apiBaseService.get(url); // Fetch a single product with ID 1

      if (!response) {
        throw new Error('Failed to fetch the product');
      }
      const data = await response;

      setProduct(data); // Assuming the API directly returns the product object
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center">Loading product...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-md-3"></div>
        <div className="col-md-6 form-box">
          {product ? (
            <div className="text-center">
              <h1>{product.title}</h1>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="img-fluid"
                style={{ width: '300px', height: '300px', objectFit: 'cover' }}
              />
            </div>
          ) : (
            <p className="text-center">Product not found.</p>
          )}
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default SingleProduct;
