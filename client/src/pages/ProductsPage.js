import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('产品数据获取失败:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ['all', ...new Set(products.map(p => p.category))];
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center" style={{ height: '50vh' }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="page-transition">
      <section className="section-large">
        <div className="container">
          {/* 页面标题 */}
          <div className="text-center mb-4">
            <h1 className="section-title mb-2">我的产品</h1>
            <div className="subtitle-en mb-3">My Products</div>
            <p className="card-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
              这里展示了我开发的AI产品和工具，每个产品都专注于解决特定的问题，提升工作效率。
            </p>
          </div>

          {/* 分类过滤器 */}
          <div className="text-center mb-4">
            <div className="flex justify-center gap-2 flex-wrap">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`btn ${filter === category ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.875rem' }}
                >
                  {category === 'all' ? '全部' : category}
                </button>
              ))}
            </div>
          </div>

          {/* 产品网格 */}
          <div className="bento-grid">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="bento-item card">
                <div className="flex items-start justify-between mb-3">
                  <div 
                    className="flex items-center justify-center"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'var(--primary-red-light)',
                      borderRadius: 'var(--radius-medium)'
                    }}
                  >
                    <i className="fas fa-cube icon-large"></i>
                  </div>
                  <span 
                    className="subtitle-en"
                    style={{ 
                      background: 'var(--primary-red-light)', 
                      padding: '4px 12px', 
                      borderRadius: '8px',
                      fontSize: '0.75rem'
                    }}
                  >
                    {product.category}
                  </span>
                </div>

                <h3 className="card-title mb-2">{product.name}</h3>
                <p className="card-text mb-3">{product.description}</p>

                {/* 功能特性 */}
                {product.features && product.features.length > 0 && (
                  <div className="mb-3">
                    <div className="subtitle-en mb-2" style={{ fontSize: '0.875rem', color: 'var(--text-tertiary)' }}>
                      Key Features
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="subtitle-en"
                          style={{ 
                            background: 'var(--bg-secondary)', 
                            padding: '2px 8px', 
                            borderRadius: '4px',
                            fontSize: '0.75rem',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* 访问按钮 */}
                <div className="flex gap-2">
                  <a 
                    href={product.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-1"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    访问产品
                  </a>
                </div>

                <div className="highlight-overlay"></div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center mt-4">
              <p className="card-text">该分类下暂无产品</p>
            </div>
          )}
        </div>
      </section>

      {/* 产品统计 */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="bento-grid-large">
            <div className="bento-item bento-item-wide text-center highlight-gradient">
              <h2 className="section-title text-white mb-3">持续创新</h2>
              <div className="subtitle-en text-white mb-4" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                Continuous Innovation
              </div>
              <p className="text-white mb-4" style={{ fontSize: '1.1rem', opacity: 0.8 }}>
                每个产品都是对特定问题的深度思考和解决方案的实现
              </p>
            </div>
            
            <div className="bento-item bento-item-small text-center">
              <div className="mega-number">{products.length}</div>
              <div className="card-title mb-1">总产品数</div>
              <div className="subtitle-en">Total Products</div>
            </div>

            <div className="bento-item bento-item-small text-center">
              <div className="mega-number">{categories.length - 1}</div>
              <div className="card-title mb-1">产品类别</div>
              <div className="subtitle-en">Categories</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage; 