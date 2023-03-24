import styled from "styled-components";

const PhotoListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 312px);
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  li {
    height: 100%;
  }

  @media (min-width: 768px) {
    gap: 72px;
  }
`;

export default PhotoListStyled;
