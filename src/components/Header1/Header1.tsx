import React from "react";
import * as s from "./styled";
export const Header1 = () => {
  return (
    <s.HeaderContainer>
      <s.HeaderSubContainer></s.HeaderSubContainer>
      <s.HeaderSubContainerMiddle>
        <s.HeaderSubContainer>
          <s.Span1>Volume 24h:</s.Span1>
          <s.Span2> 48001 SOL</s.Span2>
        </s.HeaderSubContainer>
        <s.HeaderSubContainer>
          <s.Span1>Volume total:</s.Span1>
          <s.Span2> 22,646,568 SOL</s.Span2>
        </s.HeaderSubContainer>
        <s.HeaderSubContainer>
          <s.Span1>SOL/USD</s.Span1>
          <s.Span2> $42.22</s.Span2>
        </s.HeaderSubContainer>
        <s.HeaderSubContainer>
          <s.Span1>Solana Network:</s.Span1>
          <s.Span2> 2572 TPS</s.Span2>
        </s.HeaderSubContainer>
      </s.HeaderSubContainerMiddle>
      <s.HeaderSubContainerRight>
        <s.LanguageSelect>
          <s.Option value="English">English</s.Option>
          <s.Option value="한국어">한국어</s.Option>
          <s.Option value="日本語">日本語</s.Option>
          <s.Option value="Türkçe">Türkçe</s.Option>
          <s.Option value="Tiếng Việt">Tiếng Việt</s.Option>
          <s.Option value="Русский">Русский</s.Option>
        </s.LanguageSelect>
      </s.HeaderSubContainerRight>
    </s.HeaderContainer>
  );
};
