import type { Product } from "../types/produk";

interface ProductCardProps extends Pick<Product, "name" | "price" | "image"> {
  isAdded: boolean;
  onToggle: () => void;
}

export const formatRupiah = (value: number) =>
  "Rp " + value.toLocaleString("id-ID");

export default function ProductCard({
  name,
  price,
  image,
  isAdded,
  onToggle,
}: ProductCardProps) {
  return (
    <article className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-body">
        <h3 className="card-name">{name}</h3>
        <p className="card-price">{formatRupiah(price)}</p>
        {/* Conditional rendering: teks & warna tombol berubah */}
        <button
          className={`btn ${isAdded ? "btn-added" : "btn-add"}`}
          onClick={onToggle}
        >
          {isAdded ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}

