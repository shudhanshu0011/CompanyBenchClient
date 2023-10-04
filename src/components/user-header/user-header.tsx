import userIcon from "@assets/icons/user-icon.png";
import { User } from "@src/types/components";
import "./user-header.scss";

interface Props {
  user: User;
}

export const UserHeader = ({ user }: Props): JSX.Element => {
  return (
    <div className="headers-right">
      <img src={userIcon}></img>
      <div>
        <div>
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </div>
        <a>{user.userType}</a>
      </div>
    </div>
  );
};
