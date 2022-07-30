import styled from "styled-components";

const Button = styled.button`
  padding: 6px 12px;
  font-size: 18px;
  font-weight: normal;
  border: 1px solid transparent;
  border-radius: 4px;
  color: white;
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${(props) => props.theme.primary};
  border-color: ${(props) => props.theme.primaryBorder};
`;

export const ButtonDanger = styled(Button)`
  background-color: ${(props) => props.theme.danger};
  border-color: ${(props) => props.theme.dangerBorder};
`;
