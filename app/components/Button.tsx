import classNames from "classnames";
import Link from "next/link";

interface IProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  size?: "small" | "regular" | "large";
  disabled?: boolean;
  onClick?(): void;
  type?: "button" | "submit";
}

export default function Button({
  children,
  className,
  href,
  size,
  disabled,
  onClick,
  type = "button",
}: IProps) {
  const cls = classNames("button", `button--${size}`, {
    "button--disabled": disabled,
  });

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
