import styled from "styled-components";

const Label = styled.label`
  font-size: 18px;
  color: ${(props) => props.color};
`;

const LabelBold = styled(Label)`
  font-weight: bold;
`;

export { Label, LabelBold };
