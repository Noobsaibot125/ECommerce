import { Link } from 'react-router-dom';
import { Smartphone, Watch, Camera, Headphones, Monitor, Gamepad2 } from 'lucide-react';

const Categories = () => {
    const categories = [
        { id: 1, name: 'Téléphones', icon: <Smartphone size={32} /> },
        { id: 2, name: 'Montres intelligentes', icon: <Watch size={32} /> },
        { id: 3, name: 'Appareils photo', icon: <Camera size={32} /> },
        { id: 4, name: 'Casques audio', icon: <Headphones size={32} /> },
        { id: 5, name: 'Ordinateurs', icon: <Monitor size={32} /> },
        { id: 6, name: 'Jeux vidéo', icon: <Gamepad2 size={32} /> },
    ];

    return (
        <section className="categories-section container">
            <div className="section-header">
                <h2>Parcourir par catégorie</h2>
                <div className="header-actions">
                    {/* Navigation arrows placeholder */}
                    <button className="nav-arrow">&lt;</button>
                    <button className="nav-arrow">&gt;</button>
                </div>
            </div>

            <div className="categories-grid">
                {categories.map((category) => (
                    <Link key={category.id} to={`/products?category=${category.name.toLowerCase()}`} className="category-card">
                        <div className="category-icon">{category.icon}</div>
                        <span className="category-name">{category.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Categories;
