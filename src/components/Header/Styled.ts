import styled from "styled-components";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 80rem;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;

  background-color: rgba(18, 12, 24, 1);
`;
export const Logo = styled.img`
  width: 180rem;
  height: 80rem;
  transition: 0.1s ease;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
export const SearchContainer = styled.div`
  display: flex;

  max-width: 574rem;
  width: 100%;
  height: 44rem;
  background-color: #24182f;
  align-items: center;
  border-radius: 50rem;
  &:hover {
    border: 1px solid rgb(89, 82, 128);
  }
`;
export const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  padding: 0 15rem;
`;
export const SearchInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  color: white;
`;
export const WalletContainer = styled.div`
  display: flex;
  border: 1px solid rgb(228, 37, 117);
  border-right: none;
  align-items: center;
  border-radius: 5rem;
  margin-right: 20rem;
`;
export const ProfileIcon = styled.img``;
export const Div = styled.div`
  padding: 6rem;
  border-right: 1px solid rgb(228, 37, 117);
  &:hover {
    background-color: #f94e9b;
    cursor: pointer;
  }
`;
export const Button = styled(WalletMultiButton)`
  background-color: transparent;
  color: #f8f7f8;
  height: 100%;
  font-style: sans-serif;
  width: 100%;
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
