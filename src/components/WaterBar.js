import styled from 'styled-components'
import {DrinkedWater} from '../providers/water'
import { useContext } from 'react'

const Bar = styled.div`
    width: 150px;
    background-color: rgb(1,174, 255);
    height: ${props=>props.fillBar ? props.fillBar+'%' : '0'};
    max-height: 100%;
    transition: 1s;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;

    overflow-y: hidden;
    .water{
        color: white;
        font-size: 18px;
        padding: 1rem;
    }
`

function WaterBar(){

    const [drinkWater, setWater] = useContext(DrinkedWater)
    const {currentWater, totalWater} = drinkWater

    return(
        <Bar fillBar={currentWater*100/totalWater}>
        <span className="water">
        {`${currentWater.toFixed(2) || 0} / ${totalWater.toFixed(2)} L`}
        </span>
        </Bar>
    )
}

export default WaterBar;