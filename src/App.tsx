import { useState } from "react";
import ProductCard from "./components/ProductCard";
import type { Product } from "./types/produk";
import { products } from "./dataProduk/data";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

export default function App() {
  const [cart, setCart] = useState<number[]>([]);

  const toggleCart = (id: number) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const cartItems: Product[] = products.filter((p) => cart.includes(p.id));

  return (
    <div className="container">
      <Navbar cartCount={cart.length} onClear={() => setCart([])} />

      <main className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            isAdded={cart.includes(product.id)}
            onToggle={() => toggleCart(product.id)}
          />
        ))}
      </main>

      <Cart items={cartItems} onRemove={toggleCart} />
    </div>
  );
}