import ProductCard from "./ProductCard";

const products = [
  ["/assets/product-1.jpg", "#games"],
  ["/assets/product-2.jpg", "#games"],
  ["/assets/product-3.jpg", "#shows"],
  ["/assets/product-4.jpg", "#shows"],
];
export default function UniverseSection() {
  return (
    <section id="games" className="product-section yellow-grid">
      <div className="product-inner">
        <div className="product-copy">
          <h2 className="cyber-display">Welcome to the dark future</h2>
          <p>
            Immerse yourself in the Cyberpunk universe, from the original
            storyline of Cyberpunk 2077 and its gripping spy-thriller expansion
            Phantom Liberty to the award-winning anime series Cyberpunk:
            Edgerunners — there are countless stories to discover in the deadly
            megalopolis of Night City.
          </p>
        </div>
        <div className="products bracket">
          {products.map(([image, href]) => (
            <ProductCard key={image} image={image} href={href} />
          ))}
        </div>
        <div className="product-bottom" />
      </div>
    </section>
  );
}
