import styled from '@emotion/styled';

const Container = styled.div`
  ${props => {
    if (props.display === 'grid') {
      return `
      display: grid;
      grid-template-columns: repeat(5, 12rem);
      column-gap: 3rem;
      row-gap: 3rem;
      margin: auto;
    `;
    }
  }}
`;

export { Container };
