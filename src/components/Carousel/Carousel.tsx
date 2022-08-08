import * as React from "react";
import styled, { css } from "styled-components";

const SCarouselWrapper = styled.div`
  display: flex;
  border: 1px solid #24182f;
  margin-right: 20rem;
  margin-left: 230rem;
  border-radius: 30rem;
`;

interface ICarouselSlide {
  active?: boolean;
}

const SCarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
  width: 100%;
`;

interface ICarouselProps {
  currentSlide: number;
}

const SCarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${(props) =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;

interface IProps {
  children: JSX.Element[];
}

const Carousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  React.useEffect(() => {
    setTimeout(
      () =>
        setCurrentSlide((prevIndex) =>
          prevIndex === children.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );

    return () => {};
  }, [currentSlide, children.length]);
  const activeSlide = children.map((slide, index) => (
    <SCarouselSlide active={currentSlide === index} key={index}>
      {slide}
    </SCarouselSlide>
  ));

  return (
    <div>
      <SCarouselWrapper>
        <SCarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </SCarouselSlides>
      </SCarouselWrapper>
    </div>
  );
};

export default Carousel;
