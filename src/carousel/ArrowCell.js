import { Cell } from 'styled-css-grid';

const ArrowCell = Cell.extend`
  @media (max-width: 1025px) {
    display: none
  }
`;

export default ArrowCell;
