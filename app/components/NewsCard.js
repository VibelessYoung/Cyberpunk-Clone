export default function NewsCard({ image, title }) {
  return (
    <article className="news-card">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <div className="line" />
    </article>
  );
}
