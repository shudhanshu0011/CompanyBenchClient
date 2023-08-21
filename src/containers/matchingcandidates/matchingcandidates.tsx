
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import "@styles/common/_pages.scss";
import "./matchingcandidates.scss";
import { Sidebar } from "../../components/sidebar/sidebar";


export const MatchingCandidates = (): JSX.Element => {
  return (
    <PageWrapper>
      <div className="body-items">
        <Sidebar activeLink="/cmatchingcandidate"/>
        <div className="box-content pt-40 pl-30">
          Matching Candidates
        </div>
      </div>
    </PageWrapper>
  );
};
