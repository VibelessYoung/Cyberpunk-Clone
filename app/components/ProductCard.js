import CyberButton from "./CyberButton";

export default function ProductCard({ image, href = "#" }) {
  return (
    <article className="product-card">
      <img src={image} alt="Cyberpunk universe" />

      <div className="product-card-overlay">
        <div className="product-card-corner top-left" />
        <div className="product-card-corner top-right" />
        <div className="product-card-corner bottom-left" />
        <div className="product-card-corner bottom-right" />

        <div className="product-card-scanlines" />

        <div className="product-card-info">
          <span className="product-card-id">NC_2077 // DATA</span>

          <CyberButton dark href={href}>
            LEARN MORE
          </CyberButton>
        </div>
      </div>

      <div className="product-card-number">07</div>
    </article>
  );
}
