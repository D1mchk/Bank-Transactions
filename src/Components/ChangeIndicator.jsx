export function ChangeIndicator({ value }) {
  const isPositive = value >= 0;
  return (
    <span
      className={`text-sm font-medium ${
        isPositive ? "text-emerald-400" : "text-red-400"
      }`}
    >
      {isPositive ? "↑" : "↓"} {Math.abs(value)}% this month
    </span>
  );
}
