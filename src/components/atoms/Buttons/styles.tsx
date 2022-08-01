import styled from "styled-components";

const Button = styled.button`
  padding: 6px 12px;
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  color: white;
  display: flex;
  align-items: center;
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primaryBorder};
`;

export const ButtonDanger = styled(Button)`
  background-color: ${(props) => props.theme.danger};
  border-color: ${(props) => props.theme.dangerBorder};
`;
