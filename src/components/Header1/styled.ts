import styled from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 32px;
  background-color: #24182f;
  justify-content: space-between;
`;
export const Span1 = styled.span`
  color: lightgray;
  font-size: 13rem;
`;
export const Span2 = styled.span`
  color: #e42575;
  font-size: 13rem;
`;
export const HeaderSubContainer = styled.div``;
export const HeaderSubContainerMiddle = styled.div`
  display: flex;
  width: 600rem;
  height: 32px;
  align-items: center;
  justify-content: space-between;
`;
export const LanguageSelect = styled.select`
  background-color: transparent;
  margin-right: 20rem;
  color: lightgray;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
export const Option = styled.option`
  background-color: black;
`;
export const HeaderSubContainerRight = styled.div`
  display: flex;
  align-items: center;
`;
