import styled from "styled-components";

const Header = styled.header`
  margin: 2rem 0;

  .title {
    box-sizing: border-box;
    background: ${(props) => props.theme.primary};
    color: white;
    width: 100%;
    text-align: center;
    padding: 0.5rem;

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 0;
      font-weight: normal;
    }
  }

  .content {
    padding: 1rem 1rem 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .invoice-img {
      justify-self: end;

      img {
        max-width: 300px;
      }

      .img-controllers {
        display: flex;
        justify-content: end;
        gap: 0.5rem;

        a {
          text-decoration: none;
          font-size: 18px;
        }
      }
    }
  }
`;

export { Header };
