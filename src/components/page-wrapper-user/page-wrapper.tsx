import { CopyrightFooter } from "@components/copyright-footer";
import { Header2 } from "../user-header";

interface Props {
  children: React.ReactElement;
}
export const PageWrapperUser = ({ children }: Props) => {
  return (
    <main className="main">
      <div className="page-wrapper">
        <Header2 />
        {children}
        <CopyrightFooter/>
      </div>
    </main>
  );
};
