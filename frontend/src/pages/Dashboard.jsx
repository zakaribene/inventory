import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:3000/api/products';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalProducts = products.length;
  const lowStockItems = products.filter(p => p.quantity < 10).length;
  const recentProducts = products.slice(0, 6); // Show first 6 products

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-1">Dashboard</h1>
        <p className="text-slate-600 text-sm">Welcome back! Here's what's happening with your inventory.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Total Products Card */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-xl">
              📦
            </div>
          </div>
          <h3 className="text-sm font-medium text-slate-500 mb-1">Total Products</h3>
          {loading ? (
            <div className="h-8 w-16 bg-slate-200 rounded animate-pulse"></div>
          ) : (
            <p className="text-2xl font-bold text-slate-900">{totalProducts}</p>
          )}
        </div>

        {/* Low Stock Card */}
        <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-xl">
              📊
            </div>
          </div>
          <h3 className="text-sm font-medium text-slate-500 mb-1">Low Stock Items</h3>
          {loading ? (
            <div className="h-8 w-16 bg-slate-200 rounded animate-pulse"></div>
          ) : (
            <p className="text-2xl font-bold text-slate-900">{lowStockItems}</p>
          )}
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white rounded-lg border border-slate-200">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Recent Products</h2>
            <p className="text-sm text-slate-500 mt-1">Latest products in your inventory</p>
          </div>
          <button
            onClick={() => navigate('/admin/products')}
            className="text-sm text-slate-600 hover:text-slate-900 font-medium"
          >
            View All →
          </button>
        </div>

        {loading ? (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-32 bg-slate-200 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        ) : recentProducts.length === 0 ? (
          <div className="p-12 text-center">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No products yet</h3>
            <p className="text-slate-600 mb-6 text-sm">Create your first product to get started!</p>
            <button
              onClick={() => navigate('/admin/products')}
              className="px-4 py-2 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
            >
              Add Product
            </button>
          </div>
        ) : (
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors cursor-pointer"
                  onClick={() => navigate('/admin/products')}
                >
                  <div className="flex items-start gap-3">
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded bg-slate-100 flex items-center justify-center text-2xl">
                        📦
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-slate-900 truncate">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        ${product.price?.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`text-xs font-medium ${
                            product.quantity < 10 ? 'text-red-600' : 'text-slate-600'
                          }`}
                        >
                          Qty: {product.quantity}
                        </span>
                        {product.quantity < 10 && (
                          <span className="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded">
                            Low Stock
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6 border border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/admin/products')}
            className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 text-left"
          >
            <span className="text-xl">➕</span>
            <div>
              <p className="font-medium text-slate-900">Add Product</p>
              <p className="text-xs text-slate-500">Create a new product</p>
            </div>
          </button>
          <button
            onClick={() => navigate('/admin/products')}
            className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200 text-left"
          >
            <span className="text-xl">📈</span>
            <div>
              <p className="font-medium text-slate-900">View All Products</p>
              <p className="text-xs text-slate-500">Manage your inventory</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

