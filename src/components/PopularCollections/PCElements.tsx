import React from "react";
import {
  Div1,
  Div2,
  Div3,
  DivHeading,
  LogoImage,
  Logoo,
  Para,
  PCElement,
  Percent,
} from "./styled";
import sol from "../../assets/images/Sol.svg";

export const PCElements = ({ name, image, vol, rank, ownerCount }: any) => {
  let num = +ownerCount;
  return (
    <PCElement>
      <Div1>{rank}</Div1>
      <LogoImage src={image} />
      <Div2>
        <Para>
          <DivHeading>{name}</DivHeading>
          <Percent>+{Math.floor(Math.random() * 100)}%</Percent>
        </Para>

        <Para>
          <Div3>
            Floor <Logoo src={sol} /> {num.toFixed(2)}
          </Div3>
          <Div3>
            <Logoo src={sol} /> {Number(vol).toFixed(2)}
          </Div3>
        </Para>
      </Div2>
    </PCElement>
  );
};
