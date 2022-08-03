import styled from "styled-components";
export const LpContainer = styled.div`
  display: grid;
  min-height: 600rem;
  height: 100%;
  grid-template-columns: 1fr 2fr;
`;
export const LpSubCOntainer = styled.div`
  padding: 0 50rem;
`;
export const Heading = styled.h1`
  font-size: 48px;
  color: white;
`;
export const Para = styled.p`
  color: #a197aa;
  font-size: 16rem;
`;
export const Button = styled.button`
  background-color: #e42575;
  color: #f8f7f8;
  padding: 12rem;
  margin: 32rem;
  margin-left: 0;
  transition: 0.3s ease;
  border-radius: 10rem;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
export const Image = styled.img`
  max-width: 770rem;
  width: 100%;
`;
export const ImgageContainer = styled.div``;
