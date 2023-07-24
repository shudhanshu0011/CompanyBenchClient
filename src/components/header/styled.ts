import { styled } from "styled-components";
import { theme } from "../../styles/styles.constant";

export const TopBar = styled("div")`
  text-align: right;
  background: ${theme.colors.bgBlue};
  padding: 4px 0;
  a {
    color: ${theme.colors.white};
    margin: 0 4px;
    text-decoration: none;
    font-size: 18px;
  }

  img {
    width: 24px;
    border-radius: 4px;
  }
`;
