import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { Banner } from "@components/banner";

export const Home = (): JSX.Element => {
  return (
    <PageWrapper>
      <section className="section-box">
        <Banner />
      </section>
    </PageWrapper>
  );
};
