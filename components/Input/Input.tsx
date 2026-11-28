import css from "./Input.module.css";

type InputType = "text" | "email" | "password" | "number";

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: InputType;
  placeholder?: string;
  error?: string;
}

export default function Input({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  error,
}: InputProps) {
  return (
    <div className={css.field}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={css.input}
      />
      {error && <span className={css.error}>{error}</span>}
    </div>
  );
}
