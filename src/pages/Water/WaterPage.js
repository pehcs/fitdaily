import styled from 'styled-components'
import {DrinkedWater} from '../../providers/water'
import WaterBar from '../../components/WaterBar'
import { useContext } from 'react'
import Button from '../../components/Button'

const Container = styled.div`
    padding: 1rem;
    display: flex;
    gap: 10px;
    flex-direction: ${props => props.direction === 'row' ? 'row' : 'column'};
    justify-content: center;
`

function WaterPage() {


   const [drinkWater, setWater] = useContext(DrinkedWater)
   const {currentWater, stepWater, totalWater} = drinkWater

  return (
    <Container direction="row">
      <Container>
      <h1>Beba água</h1>
      <span>Vamos calcular quanto você precisa de água</span>
      <Container>
        <label htmlFor="weight">Seu peso:</label>
        <input name="weight" type="number" onChange={(e)=>{setWater(
            {
                ...drinkWater,
                totalWater: (e.target.value*0.035)
            })
            console.log(drinkWater)
            }}></input>
        {totalWater !== 0 && <span>{`${totalWater.toFixed(2)} litros por dia`}</span>}
      </Container>
      <Container>
        <label htmlFor="stepWater">Qual a medida do copo que você vai usar?</label>
        <input name="stepWater" type="number" onChange={(e)=>setWater(
            {
                ...drinkWater,
                stepWater: e.target.value/1000
            }
            )}></input>
      </Container>
      {totalWater !== 0 && <span className="waterPerDay">{`${currentWater.toFixed(2) || 0}/${totalWater.toFixed(2)} litros por dia`}</span>}
      <Button onClick={(e)=>{
          setWater({...drinkWater, currentWater: currentWater+stepWater})
          }}>BEBER ÁGUA</Button>
    </Container>
    <WaterBar></WaterBar>
</Container>
  );
}

export default WaterPage;
