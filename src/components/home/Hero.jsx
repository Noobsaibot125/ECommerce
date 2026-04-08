import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="hero-subtitle">Pro. Beyond.</span>
                    <h1 className="hero-title">iPhone 14 Pro</h1>
                    <p className="hero-description">
                        Créé pour tout changer pour le mieux. Pour tout le monde.
                    </p>
                    <Link to="/products" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                        Acheter maintenant
                    </Link>
                </div>
                <div className="hero-image">
                    {/* Using a placeholder for the iPhone 14 Pro image. The user can replace this later. */}
                    <img src="https://images.unsplash.com/photo-1678853755259-33d3ab2c41fd?q=80&w=1000&auto=format&fit=crop" alt="iPhone 14 Pro" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
