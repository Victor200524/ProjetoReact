import styled from "styled-components";

export const Title = styled.h2`
  color: #5F7590;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  overflow: hidden;
`;

export const FippMap = styled.iframe.attrs({
    scrolling: "no"
})`
  width: 100vw;
`;