import React from "react";
import { HeaderSubContainer } from "../Header1/styled";
import {
  Button,
  Div,
  HeadContainer,
  Logo,
  ProfileIcon,
  SearchContainer,
  SearchIcon,
  SearchInput,
  WalletContainer,
} from "./Styled";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import icon from "../../assets/images/icon.svg";

export const Header = () => {
  return (
    <HeadContainer>
      <HeaderSubContainer>
        <Logo src={logo} />
      </HeaderSubContainer>
      <SearchContainer>
        <SearchIcon src={search} />
        <SearchInput placeholder="Search Collections and Creators" />
      </SearchContainer>
      <WalletContainer>
        <Div>
          <ProfileIcon src={icon} />
        </Div>
        <Div>
          <Button>Connect Wallet</Button>
        </Div>
      </WalletContainer>
    </HeadContainer>
  );
};
