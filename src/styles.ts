import styled from 'styled-components';

export const Container = styled.div`
  padding-bottom: 40px;
  font-family: 'Montserrat', sans-serif;
  max-width: 1366px;
  margin: 0 auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 20px;

  .balanced-split-card {
    display: grid;
    grid-template-columns: 47.5% 47.5%;
    gap: 20px;
  }

  .unbalanced-split-card {
    display: grid;
    grid-template-columns: 64% calc(36% - 20px);
    gap: 20px;
  }
`;
