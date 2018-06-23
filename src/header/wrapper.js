import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 25px 40px 0;
  width: 100%;
  position: fixed;
  background-color: white;

  @media (max-width: 1025px) {
    z-index: 1;
    text-align: center;
    padding: 0
    height: 57px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  }
`;

export default Wrapper;
