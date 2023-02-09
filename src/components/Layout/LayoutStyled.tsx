import styled from "styled-components";

const LayoutStyled = styled.div`
  .main-header {
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: inherit;
    border-bottom: 3px solid var(--accentColor);
    flex-direction: column;
    padding: 50px;
  }

  .main-title {
    font-size: 2.5rem;
    font-family: "Cinzel Decorative";
  }

  @media (min-width: 768px) {
    .main-header {
      height: 95px;
      justify-content: space-between;
      flex-direction: row;
    }
  }
`;

export default LayoutStyled;