import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-family: 'Rakkas', cursive;
  font-size: 50px;
  color: #212121;

  @media (max-width: 1025px) {
    padding-top: 10px;
    font-size: 25px;
  }
`;

export default Heading;
