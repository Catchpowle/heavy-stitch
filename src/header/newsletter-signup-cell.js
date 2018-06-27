import styled from 'styled-components';
import { Cell } from 'styled-css-grid';

const NewsletterSignupCell = styled(Cell)`
  @media (max-width: 1025px) {
    display: none;
  }
`;

export default NewsletterSignupCell;
