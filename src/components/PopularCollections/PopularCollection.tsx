import React, { useEffect, useState } from "react";
import {
  Header,
  HeadingContainer,
  Logo,
  MainHeading,
  MiddleContainer,
  SeeAll,
  Span,
  TimeDiv,
  PopularCollectionContainer,
  PCElement,
} from "./styled";

import down from "../../assets/images/down.svg";
import up2 from "../../assets/images/up2.svg";
import { data } from "./data";
import { PCElements } from "./PCElements";
import { Dropdown } from "./Dropdown";

const PopularCollection = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Last 5 minutes");

  const [anything, setAnything] = useState("top5m");

  return (
    <MiddleContainer>
      <Header>
        <HeadingContainer>
          <MainHeading>Popular Collections</MainHeading>

          <TimeDiv onClick={() => setIsActive(!isActive)}>
            <Dropdown
              selected={selected}
              setSelected={setSelected}
              isActive={isActive}
              setAnything={setAnything}
              setIsActive={setIsActive}
            />
            <Logo src={!isActive ? down : up2} />
          </TimeDiv>
        </HeadingContainer>
        <SeeAll>See All</SeeAll>
      </Header>
      <PopularCollectionContainer>
        {data[anything].map((ele: any) => (
          <PCElements {...ele} key={ele.rank} />
        ))}
      </PopularCollectionContainer>
    </MiddleContainer>
  );
};

export default PopularCollection;
