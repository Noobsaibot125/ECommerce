const DiscountBanner = () => {
    return (
        <section className="discount-banner bg-dark text-white">
            <div className="container discount-content">
                <div className="discount-image-left">
                    <img src="https://images.unsplash.com/photo-1542382103-6052dc982701?q=80&w=400&auto=format&fit=crop" alt="Tablets" />
                </div>
                <div className="discount-text">
                    <h2>Grand soldes jusqu'à <span className="highlight">70%</span></h2>
                    <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
                    <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Acheter maintenant</button>
                </div>
                <div className="discount-image-right">
                    <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400&auto=format&fit=crop" alt="Watches" />
                </div>
            </div>
        </section>
    );
};

export default DiscountBanner;
