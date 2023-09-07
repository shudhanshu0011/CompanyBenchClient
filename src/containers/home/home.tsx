import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import { Banner } from "@components/home-components/banner";
import { BoxTrust } from "@components/home-components/box-trust";
import { ChooseUsSection } from "@components/home-components/choose-us-section";
import { FeatureSection } from "@components/home-components/feature-section";
import { ReviewSection } from "@components/home-components/review-section";
import { HowToHireGuide } from "@components/home-components/how-to-hire-guide";

export const Home = (): JSX.Element => {
  return (
    <PageWrapper>
      <section className="section-box">
        <Banner />
        <BoxTrust/>
        <ChooseUsSection/>
        <FeatureSection/>
        <HowToHireGuide/>
        <ReviewSection/>
      </section>
    </PageWrapper>
  );
};
