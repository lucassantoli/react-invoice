import styled from "styled-components";

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
  padding: 0 1rem;

  .company,
  .customer {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .company {
    input {
      margin-left: auto;
      text-align: right;
    }
  }
`;

export { Form };
