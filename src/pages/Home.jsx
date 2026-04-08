import Hero from '../components/home/Hero';
import PromoBanners from '../components/home/PromoBanners';
import Categories from '../components/home/Categories';
import ProductGrid from '../components/home/ProductGrid';
import DiscountBanner from '../components/home/DiscountBanner';
import '../home.css';

const MOCK_PRODUCTS = [
    { id: 1, name: 'Apple iPhone 14 Pro Max 128 Go Deep Purple', price: 250000, image: 'https://images.unsplash.com/photo-1678652014023-e22a481c7ba0?w=300&q=80', isLiked: false },
    { id: 2, name: 'Camera Blackmagic Pocket Cinema Camera 6K', price: 250000, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&q=80', isLiked: false },
    { id: 3, name: 'Apple Watch Series 9 GPS 41mm Aluminium Starlight', price: 80000, image: 'https://images.unsplash.com/photo-1434493789847-2f02b3c22467?w=300&q=80', isLiked: false },
    { id: 4, name: 'AirPods Max Argent Starlight Aluminium', price: 40000, image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=300&q=80', isLiked: false },
    { id: 5, name: 'Samsung Galaxy Watch6 Classic 47mm Noir', price: 50000, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=300&q=80', isLiked: false },
    { id: 6, name: 'Galaxy Z Fold5 Débloqué | 256 Go | Noir fantôme', price: 800000, image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=300&q=80', isLiked: false },
    { id: 7, name: 'Galaxy Buds FE Graphite', price: 35000, image: 'https://images.unsplash.com/photo-1606220588913-b328bc6b5952?w=300&q=80', isLiked: false },
    { id: 8, name: 'Apple iPad 9 10.2 (Antarctique) WiFi 64GB - Argent', price: 150000, image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&q=80', isLiked: false },
];

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <PromoBanners />
            <Categories />
            <ProductGrid title="Nouveautés" products={MOCK_PRODUCTS} />
            <DiscountBanner />
        </div>
    );
};

export default Home;
