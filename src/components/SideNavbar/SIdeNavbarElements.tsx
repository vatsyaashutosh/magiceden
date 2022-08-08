import { useState } from "react";
import {
  Li,
  NavbarSubContainer,
  NavIcon,
  NavIcon1,
  NavSpan,
  Ul,
} from "./styled";

import downArrow from "../../assets/images/downArrow.svg";
import up from "../../assets/images/up.svg";
interface Data {
  icon: string;
  name: string;
  list: string[];
}
export const SIdeNavbarElements = ({ name, icon, list }: Data) => {
  const [toggle0, setToggle0] = useState(false);

  const handleClick = () => {
    setToggle0(!toggle0);
  };

  return (
    <>
      <NavbarSubContainer onClick={handleClick}>
        <NavIcon src={icon} />
        <NavSpan>{name}</NavSpan>
        <NavIcon1 src={list.length === 0 ? "" : toggle0 ? up : downArrow} />
      </NavbarSubContainer>
      {toggle0 && (
        <Ul>
          {list.map((ele, i) => (
            <Li key={i}>{ele}</Li>
          ))}
        </Ul>
      )}
    </>
  );
};
