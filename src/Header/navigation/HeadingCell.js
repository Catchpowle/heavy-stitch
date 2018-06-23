import styled from 'styled-components';
import { Cell } from 'styled-css-grid';

const HeadingCell = styled(Cell)`
   @media (max-width: 1025px) {
      grid-column-end: span 12;
   }
`;

export default HeadingCell;
