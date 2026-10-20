import type { Product } from "../types/produk";
import { formatRupiah } from "./ProductCard";

interface CartProps {
  items: Product[];
  onRemove: (id: number) => void;
}

export default function Cart({ items, onRemove }: CartProps) {
  // Tidak ditampilkan jika keranjang kosong
  if (items.length === 0) return null;

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="cart">
      <h2>Keranjang</h2>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <span className="cart-item-name">{item.name}</span>
            <span>{formatRupiah(item.price)}</span>
            <button onClick={() => onRemove(item.id)} aria-label="Hapus">
              ✕
            </button>
          </li>
        ))}
      </ul>
      <p className="cart-total">
        Total: <strong>{formatRupiah(total)}</strong>
      </p>
    </section>
  );
}