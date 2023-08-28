import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { Banner } from "@components/home-components/banner";
import { BoxTrust } from "@components/home-components/box-trust";
import { ChooseUsSection } from "@components/home-components/choose-us-section";

export const Home = (): JSX.Element => {
  return (
    <PageWrapper>
      <section className="section-box">
        <Banner />
        <BoxTrust/>
        {/* <ChooseUsSection/> */}
      </section>
    </PageWrapper>
  );
};
