import styled from "styled-components";

export const Title = styled.h2`
  color: #5F7590;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  @media (max-width: 736px) {
    padding: 0;
    margin-bottom: 30px;
  }
`;

export const Image = styled.img`
  @media (max-width: 1400px) {
    display: none;
  }
`;

export const Form = styled.form`
  border-radius: 15px;
  background: #D9D9D9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 736px) {
    padding: 25px 0;
  }
`;

export const FormGroup = styled.div`
`;

export const FormLabel = styled.p`
  color: #0f324d;
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 16px;
  border-radius: 10px;
  border: none;
  font-size: 25px;
  font-weight: 600;
`;

export const SubmitButton = styled.button`
  background: #0F324D;
  color: #fff;
  border-radius: 8px;
  padding: 6px 20px;
  border: none;
  margin-top: 32px;
  font-size: 25px;
  font-weight: 600;
`;