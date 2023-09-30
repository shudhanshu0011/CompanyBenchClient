import { PageWrapper } from "@src/containers/page-wrapper/page-wrapper";
import { Banner } from "@components/home-components/banner";
import { BoxTrust } from "@components/home-components/box-trust";
import { ChooseUsSection } from "@components/home-components/choose-us-section";
import { FeatureSection } from "@components/home-components/feature-section";
import { ReviewSection } from "@components/home-components/review-section";
import { RecruitmentGuide } from "@components/home-components/recruitment-guide";

export const Home = (): JSX.Element => {
  return (
    <PageWrapper>
      <section className="section-box">
        <Banner />
        <BoxTrust/>
        <ChooseUsSection/>
        <FeatureSection/>
        <RecruitmentGuide/>
        <ReviewSection/>
      </section>
    </PageWrapper>
  );
};
