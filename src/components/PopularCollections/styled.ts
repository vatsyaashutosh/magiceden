import styled from "styled-components";

export const MiddleContainer = styled.div`
  width: auto;
  min-height: 100vh;
  height: 100%;
  margin-left: 230rem;
  margin-top: 100rem;
`;
export const HeadingContainer = styled.div`
  display: flex;

  align-items: center;
  width: 500rem;
  justify-content: space-between;
  font-family: sans-serif;
`;
export const Logo = styled.img``;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MainHeading = styled.h1`
  color: white;
  font-size: 28rem;
`;
export const TimeDiv = styled.div`
  color: white;
  font-size: 16rem;
  display: flex;
  align-items: center;
  border: 1px solid #24182f;
  padding: 8rem 5rem 8rem 12rem;
  border-radius: 12rem;
  cursor: pointer;
`;
export const Span = styled.span`
  padding-right: 36rem;
`;
export const SeeAll = styled.div`
  border: 1px solid #24182f;
  padding: 8rem 12rem;
  border-radius: 12rem;
  color: white;
  font-size: 16rem;
  margin-right: 12rem;
  cursor: pointer;
`;

export const PopularCollectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 64rem);
  gap: 30rem 20rem;
  grid-auto-flow: column;
  margin-right: 20rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 64rem);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 64rem);
  }
`;
export const PCElement = styled.div`
  display: flex;
  gap: 10rem;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
export const Div1 = styled.div`
  color: white;
  font-size: 20rem;
  font-weight: bolder;
  display: flex;
  align-items: center;
`;
export const LogoImage = styled.img`
  border-radius: 50%;
`;
export const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
`;
export const Div3 = styled.div`
  display: flex;
  align-items: center;
`;
export const DivHeading = styled.h3`
  color: white;
  font-size: 16rem;
  margin: 0;
  font-weight: bolder;
`;
export const Para = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
  color: #a197aa;
  font-size: 12rem;
`;
export const Percent = styled.p`
  font-size: 12rem;
  margin: 0;
  color: #00d181;
`;
export const Logoo = styled.img`
  padding: 0 5rem;
`;
export const DropDown = styled.div`
  width: 150rem;
  position: relative;
  user-select: none;
`;
export const DropDownButton = styled.div`
  padding: 5rem;
  font-size: 16rem;
  color: #f5f3f7;
`;
export const DropDownContent = styled.div`
  position: absolute;
  font-size: 14rem;
  top: 140%;
  color: #f5f3f7;

  background-color: #1e1626;

  width: 120%;
`;
export const DropDownItem = styled.div`
  padding: 10rem 0;
  &:hover {
    cursor: pointer;
    background-color: #2c1e38;
  }
`;
