import { Button } from "react-bootstrap";
import "./styles.scss";

interface Props {
  className: string;
  title: string;
  href?: string;
  handleOnClick?(): void;
  type?: "button" | "reset" | "submit" | undefined;
  disabled?: boolean;
}
export const Btn = ({ className, title, href, handleOnClick, type, disabled }: Props) => {
  if (href) {
    return (
      <a className={className} href={href}>
        {title}
      </a>
    );
  }

  return (
    <Button
      className={className}
      onClick={handleOnClick}
      type={type || "button"}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};
