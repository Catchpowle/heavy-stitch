import styled from 'styled-components';
import { Cell } from 'styled-css-grid';

const SlidesCell = styled(Cell)`
  grid-column-end: span 8;

  @media (max-width: 1025px) {
    grid-column-end: span 10;
  }
`;

export default SlidesCell;
