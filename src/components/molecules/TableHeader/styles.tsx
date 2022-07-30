import styled from "styled-components";

const TableHeader = styled.th`
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  color: #333;

  &:last-child {
    justify-content: flex-end;
  }
`;

export { TableHeader };
