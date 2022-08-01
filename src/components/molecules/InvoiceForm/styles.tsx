import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
  padding: 0 1rem;

  input:nth-child(even) {
    margin-left: auto;
    text-align: right;
  }
`;

export { Form };
