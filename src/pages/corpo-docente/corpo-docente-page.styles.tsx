import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  padding: 0px 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 60px;
`;

export const TitleWrapper = styled.div``;

export const Title = styled.p`
  color: #0f324d;
  font-size: 2rem;
  font-weight: bold;
  @media (max-width: 410px) {
    text-align: center;
    
  }
`;

export const ProfessorWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  max-width: 1500px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
