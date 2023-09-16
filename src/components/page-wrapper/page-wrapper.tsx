import { CopyrightFooter } from "@components/copyright-footer";
import { Header } from "../header";
import { FooterSection } from "@components/home-components/footer";

interface Props {
  children: React.ReactElement;
}
export const PageWrapper = ({ children }: Props) => {
  return (
    <main className="main">
      <div className="page-wrapper">
        <Header />
        {children}
        <FooterSection/>
        <CopyrightFooter/>
      </div>
    </main>
  );
};
