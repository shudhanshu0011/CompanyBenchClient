import userIcon from "@assets/icons/user-icon.png";
import { User } from "@src/types/components";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./user-header.scss";

interface Props {
  user: User;
  handleLogout(): void;
}

export const UserHeader = ({ user, handleLogout }: Props): JSX.Element => {
  return (
    <div className="headers-right">
      <img src={userIcon}></img>
      <div>
        <div>
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </div>
        <DropdownButton
          as={ButtonGroup}
          key={"Info"}
          title={user.userType}
          className="client-btn"
        >
          <Dropdown.Item eventKey="1">Account ID - {user.userId}</Dropdown.Item>
          <Dropdown.Item eventKey="2">Company - {user.company}</Dropdown.Item>
          <Dropdown.Item eventKey="3">Email - {user.email}</Dropdown.Item>
          <Dropdown.Item eventKey="4" onClick={handleLogout}>
            Logout
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};
