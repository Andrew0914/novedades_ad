import { products } from "./data";
import logo from "./assets/logo.png"
import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <div className="container">
        <img src={logo} alt="Novedades A&D 💖" className="logo" />      
        <h1 className="header-title">Novedades A&D</h1>
        <p className="sub">Catálogo de luces LED</p>

        <div className="grid">
            {products.map((p) => (
            <ProductCard key={p.id} p={p} />
            ))}
        </div>
    </div>
  );
}
