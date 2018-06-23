import styled from 'styled-components';
import { Cell } from 'styled-css-grid';

const HeadingCell = styled(Cell)`
  grid-column-end: span 3;

   @media (max-width: 1025px) {
      grid-column-end: span 12;
   }
`;

export default HeadingCell;
