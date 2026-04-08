import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <button className="wishlist-btn">
                <Heart size={20} className={product.isLiked ? 'liked' : ''} />
            </button>

            <Link to={`/product/${product.id}`} className="product-image">
                <img src={product.image} alt={product.name} />
            </Link>

            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price.toLocaleString()} FCFA</p>
                <button className="btn btn-primary btn-full">Acheter maintenant</button>
            </div>
        </div>
    );
};

export default ProductCard;
