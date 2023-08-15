
import { Button } from "react-bootstrap";
import './styles.scss';

interface Props {
  className: string;
  title: string;
  href?: string;
  handleOnClick?(): void;
}
export const Btn = ({ className, title, href, handleOnClick }: Props) => {
  if (href) {
    return (
      <a className={className} href={href}>
        {title}
      </a>
    );
  }

  return (
    <Button className={className} onClick={handleOnClick}>
      {title}
    </Button>
  );
};
