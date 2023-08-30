import { CopyrightFooter } from "@components/copyright-footer";
import { Header } from "../header";

interface Props {
  children: React.ReactElement;
}
export const PageWrapper = ({ children }: Props) => {
  return (
    <main className="main">
      <div className="page-wrapper">
        <Header />
        {children}
        <CopyrightFooter/>
      </div>
    </main>
  );
};
