
import { PageWrapperUser } from "@components/page-wrapper-user/page-wrapper";
import "@styles/common/_pages.scss";
import "./dashboard.scss";
import { Sidebar } from "../../components/sidebar/sidebar";


export const Dashboard = (): JSX.Element => {
  return (
    <PageWrapperUser>
      <div className="body-items">
        <Sidebar activeLink="/cdashboard"/>
        <div className="box-content pt-40 pl-30">
          Dashboard
        </div>
      </div>
    </PageWrapperUser>
  );
};
