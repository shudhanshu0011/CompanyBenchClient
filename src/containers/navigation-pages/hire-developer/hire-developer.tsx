import { PageWrapper } from '@components/page-wrapper/page-wrapper';
import "./hire-developer.scss";
import { HireDeveloperBanner } from '@components/hire-developer-banner';

export const HireDeveloper: React.FC = (): JSX.Element => {

  return (
    <div>
      <PageWrapper>
        <HireDeveloperBanner />
      </PageWrapper>
    </div>
  );
};
