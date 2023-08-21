
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import "@styles/common/_pages.scss";
import "./appliedcandidates.scss";
import { Sidebar } from "../../components/sidebar/sidebar";


export const AppliedCandidates = (): JSX.Element => {
  return (
    <PageWrapper>
      <div className="body-items">
        <Sidebar activeLink="/interestedcandidate"/>
        <div className="box-content pt-40 pl-30">
          Applied Candidates
        </div>
      </div>
    </PageWrapper>
  );
};