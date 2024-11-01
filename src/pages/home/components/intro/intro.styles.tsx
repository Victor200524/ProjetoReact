import styled from "styled-components";
import background from '../../../../assets/images/logo-nova.png'

export const Wrapper = styled.div`
  background-image:  url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-height: 700px;
`;

export const TitleWrapper = styled.div`
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.79);
  width: 47%;
  min-height: 250px;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-weight: 700;
  @media (max-width: 730px) {
    font-size: 25px;
  }
`

export const BlueTitle = styled.span`
  color: #32A5D4;
`