import styled from 'styled-components';

const Image = styled.div`
 width: 100%;
 padding-top: 125%;
 background-size: contain;
 background-position: center;
 background-repeat: no-repeat;

  background-image: ${props => {
    return `url('${props.src}')`;
  }}
`;

export default Image;
