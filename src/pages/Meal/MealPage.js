import MacroBar from '../../components/MacroBar';
import InputRegisterMacros from '../../components/RegisterMacros/InputRegisterMacros'
import styled from 'styled-components'

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: ${props=> props.justifyContent ? props.justifyContent : 'center'};
  flex-direction: ${props=> props.direction ? props.direction : 'row'};
  width: 100%;
`;

function MealPage(){

    return(
        <>
        <Container>
            <Container direction="column">
                <h1>Tabela de Macros</h1>
            <InputRegisterMacros/>
            </Container>
            
        </Container>
        </>
    )
}

export default MealPage