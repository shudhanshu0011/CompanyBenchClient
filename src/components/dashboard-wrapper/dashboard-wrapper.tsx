import { Sidebar } from "@src/components/sidebar";

interface Props {
  children: React.ReactNode;
  activeLink: string
}
export const DashboardWrapper = ({ children, activeLink }: Props): JSX.Element => {
  return (
    <div className="body-items">
      <Sidebar activeLink={activeLink} />
      <div className="box-content pt-40 pl-30">{children}</div>
    </div>
  );
};
