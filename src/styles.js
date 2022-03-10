import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #101010;
  outline: none;
  margin-right: ${props => props.mg ? "30px" : "10px"};
  width: ${props => props.length ? "50px" : "150px"}; 

`
 Container