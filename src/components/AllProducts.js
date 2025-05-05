import React, { useEffect, useState } from 'react';
import apiBaseService from '../services/apiBaseService.js';
import { Link } from 'react-router-dom';


const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newProduct, setNewProduct] = useState({ title: '', price: '' });
  const [showAddModal, setShowAddModal] = useState(false);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await apiBaseService.get('/products');

      if (!response) {
        throw new Error('Failed to fetch products');
      }
      setProducts(response.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


    // Handle input changes for adding a user
    const handleNewProductChange = (e) => {
      const { name, value } = e.target;
      setNewProduct({ ...newProduct, [name]: value });
    };
  
    // Add user
    const addProduct = async (e) => {
      e.preventDefault();
      try {
        const response = await apiBaseService.post('/products/add', newProduct);
        const addedProduct = await response;
        setProducts([...products, addedProduct]);
        setProducts({ title: '', price: '' });
        setShowAddModal(false);
        alert('Product added successfully!');
      } catch (err) {
        alert('Failed to add Product.');
      }
    };



  // Delete Product
  const deleteProduct = async (id) => {
    try {
      await apiBaseService.delete(`/products/${id}`);
      setProducts(products.filter((product) => product.id !== id));
      alert('Product deleted successfully!');
    } catch (err) {
      alert('Failed to delete Product.');
    }
  };


  if (loading) return <p className="text-center">Loading products...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-md-1"></div>
        <div className="col-md-10 form-box">
          <h1 className="text-center p-4">Products List</h1>

          <div className='product-addbtn'><button  className="btn btn-Success me-2" onClick={() => {setShowAddModal(true);
    }}>
      Add Product </button></div>

          {products.length === 0 ? (
            <p className="text-center">No products available.</p>
          ) : (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="img-fluid prdct-img"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                      />
                    </td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>
                      <Link to={`/singleproduct?pid=${product.id}`} className="btn btn-primary" target='blank'>
                        View Details
                      </Link>

                      <button
                  className="btn btn-danger"
                 onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-Success me-2"
                  // onClick={() => handleAddUser(user)}
                >
                 Edit
                </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}


                          {/* Add User */}
{showAddModal && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Product</h5>
                <button type="button" className="btn-close" onClick={() => {setShowAddModal(false);
    }}></button>
              </div>
              <form className="mb-4" onSubmit={addProduct}>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={newProduct.title} className='form-control'
          onChange={handleNewProductChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={newProduct.price} className='form-control'
          onChange={handleNewProductChange}
          required
        />

                        <div className="modal-footer">
        <button type="submit" className="btn btn-success" >Add Product </button>
        </div>
      </form>
            </div>
          </div>
        </div>
      )}



        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default AllProducts;
