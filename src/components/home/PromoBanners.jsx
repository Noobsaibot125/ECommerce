import { Link } from 'react-router-dom';

const PromoBanners = () => {
    return (
        <section className="promo-banners container">
            <div className="promo-grid">
                {/* PS5 Banner */}
                <div className="promo-card promo-large" style={{ backgroundColor: '#F8F9FA' }}>
                    <div className="promo-content">
                        <h2>PlayStation 5</h2>
                        <p>Dans un monde où l'immersion est primordiale. Les couleurs sont éclatantes, l'action est fluide.</p>
                        <Link to="/products" className="btn btn-outline">Acheter maintenant</Link>
                    </div>
                    <div className="promo-img-container">
                        {/* Placeholder PS5 */}
                        <img src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=600&auto=format&fit=crop" alt="PlayStation 5" />
                    </div>
                </div>

                {/* MacBook Air Banner */}
                <div className="promo-card promo-large" style={{ backgroundColor: '#F2F2F2' }}>
                    <div className="promo-content">
                        <h2>MacBook Air</h2>
                        <p>Le nouveau MacBook Air de 15 pouces avec puce M2 prend son envol dans une direction qui correspond à vos rêves d'avenir.</p>
                        <Link to="/products" className="btn btn-outline">Acheter maintenant</Link>
                    </div>
                    <div className="promo-img-container">
                        {/* Placeholder Macbook */}
                        <img src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=600&auto=format&fit=crop" alt="MacBook Air" />
                    </div>
                </div>

                {/* AirPods Max */}
                <div className="promo-card promo-small" style={{ backgroundColor: '#EDEDED' }}>
                    <div className="promo-content">
                        <h2>Apple AirPods Max</h2>
                        <p>Bruit et distorsion à la baisse. Un pur équilibre.</p>
                    </div>
                    <div className="promo-img-container">
                        <img src="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?q=80&w=300&auto=format&fit=crop" alt="AirPods Max" />
                    </div>
                </div>

                {/* Vision Pro */}
                <div className="promo-card promo-small bg-dark text-white" style={{ backgroundColor: '#353535' }}>
                    <div className="promo-content">
                        <h2 style={{ color: 'white' }}>Apple Vision Pro</h2>
                        <p style={{ color: '#ccc' }}>Une façon audacieuse de vivre l'informatique spatiale.</p>
                    </div>
                    <div className="promo-img-container">
                        <img src="https://images.unsplash.com/photo-1707018306161-468e1465bfca?q=80&w=300&auto=format&fit=crop" alt="Vision Pro" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoBanners;
