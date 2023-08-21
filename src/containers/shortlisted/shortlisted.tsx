
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import "@styles/common/_pages.scss";
import "./shortlisted.scss";
import { Sidebar } from "../../components/sidebar/sidebar";


export const Shortlisted = (): JSX.Element => {
  return (
    <PageWrapper>
      <div className="body-items">
        <Sidebar activeLink="/shortlistedcandidates"/>
        <div className="box-content pt-40 pl-30">
          Shortlisted
        </div>
      </div>
    </PageWrapper>
  );
};
