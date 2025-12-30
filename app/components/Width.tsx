import classNames from "classnames";

interface IProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Width({ className, children }: IProps) {
  return <div className={classNames("width", className)}>{children}</div>;
}
