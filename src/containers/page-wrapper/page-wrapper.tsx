import { CopyrightFooter } from "@components/copyright-footer";
import { Header } from "@components/header";
import { FooterSection } from "@components/home-components/footer";
import { useDispatch } from "react-redux";
import { technologies } from "@src/store/reducer/refDataReducer";
import { useGetTechnologies } from "@src/hooks/useGetTechnologies";

interface Props {
  children: React.ReactElement;
}
export const PageWrapper = ({ children }: Props) => {
  const dispatch = useDispatch();
  const { data: allTechnologiesData } = useGetTechnologies();
  dispatch(technologies(allTechnologiesData?.data));

  return (
    <main className="main">
      <div className="page-wrapper">
        <Header />
        {children}
        <FooterSection />
        <CopyrightFooter />
      </div>
    </main>
  );
};
