import { useCart } from '../context/CartContext';
import { Minus, Plus, X } from 'lucide-react';
import '../cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, cartTotal, cartTax, cartGrandTotal } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty container">
                <h2>Votre panier est vide</h2>
                <Link to="/products" className="btn btn-primary mt-4">Continuer vos achats</Link>
            </div>
        );
    }

    return (
        <div className="cart-page container">
            <h1>Panier</h1>

            <div className="cart-layout">
                <div className="cart-items-list">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p className="item-price">{item.price.toLocaleString()} FCFA</p>
                            </div>

                            <div className="item-quantity">
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus size={16} /></button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus size={16} /></button>
                            </div>

                            <div className="item-total">
                                {(item.price * item.quantity).toLocaleString()} FCFA
                            </div>

                            <button className="item-remove" onClick={() => removeFromCart(item.id)}>
                                <X size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2>Résumé de la commande</h2>

                    <div className="promo-code">
                        <label>Code de réduction / Carte cadeau</label>
                        <div className="promo-input">
                            <input type="text" placeholder="Entrer le code" />
                            <button className="btn btn-outline">Appliquer</button>
                        </div>
                    </div>

                    <div className="summary-totals">
                        <div className="summary-row">
                            <span>Sous-total</span>
                            <span>{cartTotal.toLocaleString()} FCFA</span>
                        </div>
                        <div className="summary-row">
                            <span>Frais estimés</span>
                            <span>{cartTax.toLocaleString()} FCFA</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total</span>
                            <span>{cartGrandTotal.toLocaleString()} FCFA</span>
                        </div>
                    </div>

                    <button className="btn btn-primary btn-full checkout-btn">
                        Passer à la caisse
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
