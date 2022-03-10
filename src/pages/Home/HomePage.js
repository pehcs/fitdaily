
import styled from 'styled-components'
import MacroBar from '../../components/MacroBar'
import {Container} from '../../styles'
import WaterBar from '../../components/WaterBar'

const DailyMeta = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
function HomePage(){
    return (
        <Container>
            <DailyMeta>
                <h1>Metas diárias</h1>
                <MacroBar/>
            </DailyMeta>
            <WaterBar></WaterBar>
        </Container>
    )
}

export default HomePage