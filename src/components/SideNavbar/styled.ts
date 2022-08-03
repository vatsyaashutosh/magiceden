import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  border-right: 1px solid #24182f;
  flex-direction: column;
  position: fixed;
  gap: 5rem;
  z-index: 1;
  height: 78vh;
  width: 210rem;
  top: 120rem; /* Stay at the top */
  left: 0; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  justify-content: space-between;
`;
export const NbContainer0 = styled.div``;
export const NbContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
`;
export const NavbarSubContainer = styled.div`
  width: 207rem;
  height: 44rem;
  display: flex;

  align-items: center;
  &:hover {
    background-color: #24182f;
    cursor: pointer;
  }
`;
export const NavSpan = styled.span`
  color: white;
  font-size: 16rem;
  flex: 1;
`;
export const NavIcon = styled.img`
  padding: 0 10rem;
`;
export const NavIcon1 = styled.img`
  padding: 0 10rem 0 0;
`;
export const NavIcon0 = styled.img``;
export const NbDiv = styled.div`
  display: flex;
  gap: 3rem;
  padding: 5rem;
  border: 1px solid #24182f;
`;
export const NbSpan = styled.div`
  color: #f5f3f7;
  font-size: 12rem;
`;
