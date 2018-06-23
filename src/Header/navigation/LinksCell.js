import { Cell } from 'styled-css-grid';

const LinksCell = Cell.extend`
  grid-column-end: span 3;

  @media (max-width: 1025px) {
    display: none
  }
`;

export default LinksCell;
