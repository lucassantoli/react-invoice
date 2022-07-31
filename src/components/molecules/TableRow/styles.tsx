import styled from "styled-components";

interface Props {
  gridTemplateColumns: string;
}

const TableRow = styled.tr<Props>`
  border-top: 1px solid #ddd;
  font-size: 18px;
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateColumns};
  min-height: 55px;

  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
`;

export { TableRow };
