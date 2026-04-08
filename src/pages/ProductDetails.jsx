import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../product-details.css';

const MOCK_SIMILAR = [
    { id: 1, name: 'Apple iPhone 14 Pro 512 Go Or (MQ233)', price: 250000, image: 'https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=300&q=80', isLiked: false },
    { id: 2, name: 'AirPods Max Argent Starlight Aluminium', price: 40000, image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=300&q=80', isLiked: false },
    { id: 3, name: 'Apple Watch Series 9 GPS 41mm Aluminium Starlight', price: 80000, image: 'https://images.unsplash.com/photo-1434493789847-2f02b3c22467?w=300&q=80', isLiked: false },
    { id: 4, name: 'Apple iPhone 14 Pro 1 To Or (MQ2V3)', price: 250000, image: 'https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=300&q=80', isLiked: false },
];

const ProductDetails = () => {
    const [activeImage, setActiveImage] = useState('https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=600&q=80');

    return (
        <div className="product-details-page container">
            <div className="breadcrumbs">
                <span>Accueil</span> &gt; <span>Catalogue</span> &gt; <span>Smartphones</span> &gt; <span>Apple</span> &gt; <span className="current">Apple iPhone 14 Pro Max</span>
            </div>

            <div className="product-overview">
                {/* Gallery */}
                <div className="product-gallery">
                    <div className="thumbnails">
                        {['https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=150&q=80',
                            'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=150&q=80',
                            'https://images.unsplash.com/photo-1591337676887-a4b5ad01aa14?w=150&q=80',
                            'https://images.unsplash.com/photo-1589492477829-5e65395b66ea?w=150&q=80'].map((img, i) => (
                                <button key={i} className={`thumbnail ${activeImage === img ? 'active' : ''}`} onClick={() => setActiveImage(img)}>
                                    <img src={img} alt={`Thumb ${i}`} />
                                </button>
                            ))}
                    </div>
                    <div className="main-image">
                        <img src={activeImage} alt="Apple iPhone 14 Pro Max" />
                    </div>
                </div>

                {/* Info & Purchase */}
                <div className="product-info-panel">
                    <h1>Apple iPhone 14 Pro Max</h1>
                    <div className="prices">
                        <span className="current-price">300.000 FCFA</span>
                        <span className="old-price">450.000 FCFA</span>
                    </div>

                    <div className="options">
                        <div className="color-selection">
                            <span>Sélectionner la couleur :</span>
                            <div className="colors">
                                <button className="color-swatch active" style={{ backgroundColor: '#000000' }}></button>
                                <button className="color-swatch" style={{ backgroundColor: '#A020F0' }}></button>
                                <button className="color-swatch" style={{ backgroundColor: '#FF0000' }}></button>
                                <button className="color-swatch" style={{ backgroundColor: '#FFD700' }}></button>
                                <button className="color-swatch" style={{ backgroundColor: '#FFFFFF', border: '1px solid #ccc' }}></button>
                            </div>
                        </div>

                        <div className="capacity-selection">
                            <button className="capacity-btn active">128 GB</button>
                            <button className="capacity-btn">256 GB</button>
                            <button className="capacity-btn">512 GB</button>
                            <button className="capacity-btn">1 TB</button>
                        </div>
                    </div>

                    <div className="quick-specs">
                        <div className="q-spec"><div className="icon">📱</div> <span>Écran 6.7"</span></div>
                        <div className="q-spec"><div className="icon">📸</div> <span>Caméra 48MP</span></div>
                        <div className="q-spec"><div className="icon">⚙️</div> <span>Puce A16 Bionic</span></div>
                        <div className="q-spec"><div className="icon">🔋</div> <span>Autonomie 29h vidéo</span></div>
                    </div>

                    <p className="description-snippet">
                        Découvrez l'iPhone 14 Pro Max. Doté d'un nouvel appareil photo principal 48 Mpx pour des détails époustouflants, de Dynamic Island et d'un écran toujours activé qui réinvente votre façon d'interagir avec l'iPhone.
                    </p>

                    <div className="purchase-actions">
                        <button className="btn btn-outline btn-full add-to-wishlist">Ajouter à la liste de souhaits</button>
                        <button className="btn btn-primary btn-full add-to-cart">Ajouter au panier</button>
                    </div>

                    <div className="shipping-info">
                        <div className="info"><span className="icon">🚚</span> Livraison gratuite au-delà de 50.000 FCFA</div>
                        <div className="info"><span className="icon">✅</span> En stock</div>
                        <div className="info"><span className="icon">🛡️</span> Garantie 1 an</div>
                    </div>
                </div>
            </div>

            {/* Tabs / Detailed Specs */}
            <div className="details-tabs-section">
                <div className="details-header">
                    <h2>Détails</h2>
                </div>
                <div className="details-body">
                    <p className="full-description">C'est la force et la polyvalence, la beauté et l'innovation. Un système d'appareil photo professionnel qui n'a rien à envier aux capacités cinématographiques des super-héros et un écran Super Retina XDR toujours allumé avec Dynamic Island sont au cœur de l'iPhone 14 Pro Max. La puce A16 Bionic propulse toutes les fonctionnalités avancées, ce qui rend l'appareil ultra-réactif tout en optimisant la batterie.</p>

                    <h3>Écran</h3>
                    <ul className="spec-list">
                        <li><span>Diagonale de l'écran</span> <span>6.7 pouces</span></li>
                        <li><span>Résolution de l'écran</span> <span>2796 x 1290</span></li>
                        <li><span>Taux de rafraîchissement</span> <span>120 Hz</span></li>
                        <li><span>Densité de pixels</span> <span>460 ppi</span></li>
                        <li><span>Type d'écran</span> <span>OLED</span></li>
                    </ul>

                    <h3>Processeur</h3>
                    <ul className="spec-list">
                        <li><span>CPU</span> <span>A16 Bionic</span></li>
                        <li><span>Cœurs du processeur</span> <span>6</span></li>
                    </ul>

                    <button className="btn btn-outline show-more">Afficher plus v</button>
                </div>
            </div>

            {/* Reviews Summary */}
            <div className="reviews-section">
                <h2>Avis</h2>
                <div className="reviews-summary">
                    <div className="rating-score">
                        <span className="big-number">4,8</span>
                        <span className="stars">⭐⭐⭐⭐⭐</span>
                        <span className="count">12.5k avis</span>
                    </div>
                    <div className="rating-bars">
                        <div className="bar-row"><span>Excellent</span><div className="bar-bg"><div className="bar-fill" style={{ width: '90%' }}></div></div><span>102</span></div>
                        <div className="bar-row"><span>Bon</span><div className="bar-bg"><div className="bar-fill" style={{ width: '30%' }}></div></div><span>18</span></div>
                        <div className="bar-row"><span>Moyen</span><div className="bar-bg"><div className="bar-fill" style={{ width: '10%' }}></div></div><span>4</span></div>
                        <div className="bar-row"><span>En dessous de la moyenne</span><div className="bar-bg"><div className="bar-fill" style={{ width: '2%' }}></div></div><span>1</span></div>
                        <div className="bar-row"><span>Pauvre</span><div className="bar-bg"><div className="bar-fill" style={{ width: '1%' }}></div></div><span>0</span></div>
                    </div>
                </div>
            </div>

            {/* Similar Products */}
            <section className="similar-products-section">
                <h2>Produits connexes</h2>
                <div className="products-grid-4">
                    {MOCK_SIMILAR.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default ProductDetails;
