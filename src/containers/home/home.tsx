import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { Banner } from "@components/banner";
import { BoxTrust } from "@components/box-trust";

export const Home = (): JSX.Element => {
  return (
    <PageWrapper>
      <section className="section-box">
        <Banner />
        <BoxTrust/>
      </section>
    </PageWrapper>
  );
};
