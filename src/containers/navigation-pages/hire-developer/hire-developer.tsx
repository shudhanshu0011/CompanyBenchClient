import { PageWrapper } from '@src/containers/page-wrapper/page-wrapper';
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
