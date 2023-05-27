import styled from '@emotion/styled';

const Container = styled.ul`
  ${props => {
    if (props.display === 'grid') {
      return `
      display: grid;
      grid-template-columns: repeat(5, 12rem);
      column-gap: 3rem;
      row-gap: 2rem;
      margin: auto;
      margin-top: 1rem;
    `;
    }
  }}
`;

export { Container };
