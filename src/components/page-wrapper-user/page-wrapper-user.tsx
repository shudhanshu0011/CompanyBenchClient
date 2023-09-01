import { CopyrightFooter } from "@components/copyright-footer";
import { UserHeader } from "../user-header";

interface Props {
  children: React.ReactElement;
}
export const PageWrapperUser = ({ children }: Props) => {
  return (
    <main className="main">
      <UserHeader />
      {children}
      <CopyrightFooter/>
    </main>
  );
};
