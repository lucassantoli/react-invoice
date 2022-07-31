import styled from "styled-components";

const TableData = styled.td`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;

  &:last-child {
    justify-content: flex-end;
  }

  &.align-right {
    justify-content: right;
  }
`;

export { TableData };
