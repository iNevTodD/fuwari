import css from "./ProgressBar.module.css";

interface ProgressBarProps {
  current: number;
  total: number;
  color?: string;
}

export default function ProgressBar({
  current,
  total,
  color = "var(--accent)",
}: ProgressBarProps) {
  const percent = total > 0 ? Math.min((current / total) * 100, 100) : 0;
  
  return (
    <div className={css.track}>
      <div
        className={css.fill}
        style={{ width: `${percent}%`, background: color }}
      ></div>
    </div>
  );
}
