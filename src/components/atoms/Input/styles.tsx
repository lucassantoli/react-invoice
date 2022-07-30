import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 18px;
  border-radius: 0;

  :hover,
  :focus {
    border: 1px solid #ccc;
  }
`;

export const BoldInput = styled(Input)`
  font-weight: bold;
`;