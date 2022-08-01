import styled from "styled-components";

interface Props {
  textDecoration: string;
}

const Hyperlink = styled.a<Props>`
  text-decoration: ${(props) => props.textDecoration};
  cursor: pointer;
  color: ${(props) => props.theme.primary};
`;

export { Hyperlink };
