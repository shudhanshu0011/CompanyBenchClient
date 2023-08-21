
import { PageWrapper } from "@components/page-wrapper/page-wrapper";
import "@styles/common/_pages.scss";
import "./dashboard.scss";
import { Sidebar } from "../../components/sidebar/sidebar";


export const Dashboard = (): JSX.Element => {
  return (
    <PageWrapper>
      <div className="body-items">
        <Sidebar activeLink="/cdashboard"/>
        <div className="box-content pt-40 pl-30">
          Dashboard
        </div>
      </div>
    </PageWrapper>
  );
};
