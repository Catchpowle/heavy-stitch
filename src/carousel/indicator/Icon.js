import styled from 'styled-components';

const Icon = styled.div`
  background-color: ${props => props.disabled ? 'black' : 'grey'};
  width: 5px;
  height: 5px;
  border-radius: 50%;
`;


export default Icon;
