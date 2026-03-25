export function StarRating({
  count = 5,
  size = 14,
}: {
  count?: number;
  size?: number;
}) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            points="10,2 12.5,7.5 18.5,8 14,12.5 15.5,18.5 10,15.5 4.5,18.5 6,12.5 1.5,8 7.5,7.5"
            fill={i < count ? "#F4B400" : "#e0e0e0"}
          />
        </svg>
      ))}
    </div>
  );
}
