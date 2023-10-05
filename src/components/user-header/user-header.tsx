import userIcon from "@assets/icons/user-icon.png";
import { useLogout } from "@src/hooks/useLogout";
import { resetUser } from "@src/store/reducer/userDataReducer";
import { User } from "@src/types/components";
import { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./user-header.scss";

interface Props {
  user: User;
}

export const UserHeader = ({ user }: Props): JSX.Element => {
  const navigate = useNavigate();
  const { mutate: logout } = useLogout();
  const [loggedOut, setLoggedOut] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedOut) {
      dispatch(resetUser());
      navigate("/signin");
    }
  }, [logout, dispatch, loggedOut]);

  const logoutUser = () => {
    logout();
    setLoggedOut(true);
  };

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
          <Dropdown.Item eventKey="4" onClick={logoutUser}>
            Logout
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};
