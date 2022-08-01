import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 16px;
  border-radius: 0;
  width: 100%;
  max-width: 300px;

  :hover,
  :focus {
    border: 1px solid #ccc;
  }
`;

export const BoldInput = styled(Input)`
  font-weight: bold;
`;
