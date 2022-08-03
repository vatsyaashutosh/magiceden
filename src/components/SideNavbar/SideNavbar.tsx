import React from "react";
import {
  NavbarContainer,
  NavbarSubContainer,
  NavIcon,
  NavIcon0,
  NavIcon1,
  NavSpan,
  NbContainer,
  NbContainer0,
  NbDiv,
  NbSpan,
} from "./styled";
import nav1 from "../../assets/images/nav1.svg";
import nav2 from "../../assets/images/nav2.svg";
import nav3 from "../../assets/images/nav3.svg";
import nav4 from "../../assets/images/nav4.svg";
import nav5 from "../../assets/images/nav5.svg";
import nav6 from "../../assets/images/nav6.svg";
import nav7 from "../../assets/images/nav7.svg";
import nav8 from "../../assets/images/nav8.svg";
import downArrow from "../../assets/images/downArrow.svg";
import l1 from "../../assets/images/l1.svg";
import l2 from "../../assets/images/l2.svg";
import l3 from "../../assets/images/l3.svg";
import l4 from "../../assets/images/l4.svg";
import l5 from "../../assets/images/l5.svg";
import l6 from "../../assets/images/l6.svg";

export const SideNavbar = () => {
  return (
    <NavbarContainer>
      <NbContainer0>
        <NavbarSubContainer>
          <NavIcon src={nav1} />

          <NavSpan>Marketplace</NavSpan>
          <NavIcon1 src={downArrow} />
        </NavbarSubContainer>
        <NavbarSubContainer>
          <NavIcon src={nav2} />

          <NavSpan>Insights</NavSpan>
          <NavIcon1 src={downArrow} />
        </NavbarSubContainer>
        <NavbarSubContainer>
          <NavIcon src={nav3} />

          <NavSpan>Launchpad</NavSpan>
          <NavIcon1 src={downArrow} />
        </NavbarSubContainer>
        <NavbarSubContainer>
          <NavIcon src={nav4} />

          <NavSpan>Eden Games</NavSpan>
          <NavIcon1 src={downArrow} />
        </NavbarSubContainer>
        <NavbarSubContainer>
          <NavIcon src={nav5} />

          <NavSpan>Creators</NavSpan>
          <NavIcon1 src={downArrow} />
        </NavbarSubContainer>
        <NavbarSubContainer>
          <NavIcon src={nav6} />

          <NavSpan>Intro to NFTs</NavSpan>
        </NavbarSubContainer>
        <NavbarSubContainer>
          <NavIcon src={nav7} />

          <NavSpan>Support</NavSpan>
        </NavbarSubContainer>
        <NavbarSubContainer>
          <NavIcon src={nav8} />

          <NavSpan>Resources</NavSpan>
          <NavIcon1 src={downArrow} />
        </NavbarSubContainer>
      </NbContainer0>
      <NbContainer>
        <NbDiv>
          <NavIcon0 src={l1} />
          <NbSpan>IOS App</NbSpan>
        </NbDiv>
        <NbDiv>
          <NavIcon0 src={l2} />
          <NbSpan>Discord</NbSpan>
        </NbDiv>
        <NbDiv>
          <NavIcon0 src={l3} />
          <NbSpan>TikTok</NbSpan>
        </NbDiv>
        <NbDiv>
          <NavIcon0 src={l4} />
          <NbSpan>Youtube</NbSpan>
        </NbDiv>
        <NbDiv>
          <NavIcon0 src={l5} />
          <NbSpan>Twitter</NbSpan>
        </NbDiv>
        <NbDiv>
          <NavIcon0 src={l6} />
          <NbSpan>Instagram</NbSpan>
        </NbDiv>
      </NbContainer>
    </NavbarContainer>
  );
};
