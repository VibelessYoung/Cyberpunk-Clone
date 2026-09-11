import CyberButton from "./CyberButton";
export default function ProductCard({ image, href = "#" }) {
  return (
    <article className="product-card">
      <img src={image} alt="Cyberpunk universe" />
      <div className="overlay">
        <CyberButton dark href={href}>
          Learn more
        </CyberButton>
      </div>
    </article>
  );
}
