import { Header2 } from "../header2";

interface Props {
  children: React.ReactElement;
}
export const PageWrapperUser = ({ children }: Props) => {
  return (
    <main className="main">
      <div className="page-wrapper">
        <Header2 />
        {children}
      </div>
    </main>
  );
};
