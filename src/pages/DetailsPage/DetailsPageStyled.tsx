import styled from "styled-components";

const DetailsPageStyled = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 50px;

  .details {
    &__container {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      gap: 35px;
    }

    &__image {
      border-radius: 15px;
      border: 1px solid #fff;
      width: 100%;
      height: fit-content;
    }

    &__photographer {
      font-size: 2.25rem;
    }

    &__tags {
      align-self: flex-end;
      color: var(--accentColor);
      font-style: italic;
      font-size: 1rem;
    }

    &__description {
      text-align: justify;
    }

    &__username {
      color: var(--accentColor);
      padding: 0 10px;
    }

    &__button {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      font-size: 1.2rem;
      padding: 20px 40px;
      font-weight: bold;
      background-color: var(--accentColor);
      border-radius: 15px;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    .details {
      &__container {
        flex-direction: row;
      }

      &__body {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 50px;
      }

      &__image {
        width: fit-content;
        max-height: 80vh;
      }

      &__button {
        width: 100%;
      }
    }
  }
`;

export default DetailsPageStyled;
