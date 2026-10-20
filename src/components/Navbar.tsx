interface NavbarProps {
  cartCount: number;
  onClear: () => void;
}

export default function Navbar({ cartCount, onClear }: NavbarProps) {
  return (
    <header className="header">
      <div> 
        <h1>Product List</h1>
        <p className="subtitle">Find your favorite products.</p>
      </div>
      <div className="cart-info">
        <span className="cart-count">
          Cart: {cartCount} {cartCount === 1? "item" : "items"}
        </span>
        {cartCount > 0 && (
          <button className="btn-clear" onClick={onClear}>
            Clear Cart
          </button>
        )}
      </div>
    </header>
  );
}