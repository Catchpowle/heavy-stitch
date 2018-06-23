import styled from 'styled-components';
import { Cell } from 'styled-css-grid';

const LinksCell = Cell.extend`
  grid-column-end: span 3;
  text-align: center;

  @media (max-width: 1025px) {
    display: none
  }
`;

const HeadingCell = styled(Cell)`

`;

export { HeadingCell, LinksCell };
