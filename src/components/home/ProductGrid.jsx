import { useState } from 'react';
import ProductCard from '../ProductCard';

const ProductGrid = ({ title, products }) => {
    const [activeTab, setActiveTab] = useState('Nouveautés');
    const tabs = ['Nouveautés', 'Bestseller', 'Produits phares'];

    return (
        <section className="product-grid-section container">
            <div className="section-header">
                <div className="tabs">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            className={`tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="view-all">Voir tous les produits &gt;</div>
            </div>

            <div className="products-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
