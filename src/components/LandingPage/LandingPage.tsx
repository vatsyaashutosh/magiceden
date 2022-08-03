import React from "react";
import {
  Button,
  Heading,
  Image,
  ImgageContainer,
  LpContainer,
  LpSubCOntainer,
  Para,
} from "./styled";
import img1 from "../../assets/images/index.jpeg";
import img3 from "../../assets/images/index2.gif";
import img2 from "../../assets/images/index4.webp";
import img4 from "../../assets/images/index1.jpeg";
import "react-awesome-slider/dist/styles.css";
import Carousel from "../Carousel/Carousel";

const LandingPage = () => {
  return (
    <Carousel>
      <LpContainer>
        <LpSubCOntainer>
          <Heading>Rakkudos</Heading>
          <Para>
            10,000 Raccoons empowering web3 builders brought to you by Shakudo -
            the platform that unites all of the data tools and services you’ll
            ever need.
          </Para>
          <Button>Go to Launchpad</Button>
        </LpSubCOntainer>
        <ImgageContainer>
          <Image src={img1} />
        </ImgageContainer>
      </LpContainer>

      <LpContainer>
        <LpSubCOntainer>
          <Heading>Founders Coins</Heading>
          <Para>
            The first ever Bear Drop. A collection of 10,000 Founders Coins
            celebrating our history-making, record-breaking, culture-shifting
            community.
          </Para>
          <Button>Explore Collection</Button>
        </LpSubCOntainer>
        <ImgageContainer>
          <Image src={img2} />
        </ImgageContainer>
      </LpContainer>

      <LpContainer>
        <LpSubCOntainer>
          <Heading>Genopets' SFT Marketplace Live</Heading>
          <Para>
            Genopets is a Free-to-Play, Move-to-Earn NFT RPG that makes it fun
            and rewarding to live an active lifestyle. The steps you take
            everyday power your journey through the Genoverse as you explore,
            battle, and evolve — earning crypto while you play. Craft, Buy &
            Sell Crystals & Terraform Seed SFTs to customize your Genopet and
            prepare for battle.
          </Para>
          <Button>Explore Collections</Button>
        </LpSubCOntainer>
        <ImgageContainer>
          <Image src={img3} />
        </ImgageContainer>
      </LpContainer>

      <LpContainer>
        <LpSubCOntainer>
          <Heading>Eden Hour Ep.22</Heading>
          <Para>
            Michael George discusses the importance of building a pipeline of
            talent to onboard into the Web3 and Solana ecosystem.
          </Para>
          <Button>Watch now</Button>
        </LpSubCOntainer>
        <ImgageContainer>
          <Image src={img4} />
        </ImgageContainer>
      </LpContainer>
    </Carousel>
  );
};

export default LandingPage;
