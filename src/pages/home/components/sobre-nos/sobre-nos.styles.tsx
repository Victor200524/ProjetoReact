import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  color: #5F7590;
  font-size: 30px;
  font-weight: 700;
`;

export const SubTitle = styled.h3`
    color: #0F324D;
    font-size: 25px;
    font-weight: 700;
`

export const Card = styled.div`
  border-radius: 25px;
  background: rgba(204, 204, 204, 0.40);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 50%;
  margin: 24px 0;
  padding: 25px;
  @media (max-width: 736px) {
    width: 80%;
  }
`

export const Message = styled.p`
  color: #0F324D;
  text-align: center;
  font-size: 25px;
  font-weight: 400;
`