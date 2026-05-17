export default function StarRating({ rating, size = 'sm' }) {
  const sizeClass = size === 'lg' ? 'text-lg' : 'text-sm';

  return (
    <div className={`flex items-center gap-1 ${sizeClass}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={
            star <= Math.round(rating) ? 'text-warning' : 'text-base-content/25'
          }
        >
          ★
        </span>
      ))}
      <span className="ml-1 font-semibold text-base-content/80">{rating}</span>
    </div>
  );
}
