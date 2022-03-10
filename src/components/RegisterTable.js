import styled from "styled-components";
import { useContext, useState } from "react";
import InputRegisterMacros from "./RegisterMacros/InputRegisterMacros";
import Container from "../styles";
import {MacroNutrients} from '../providers/macroNutrients'
import Button from './Button'

const TableContainer = styled.div`
  padding: 1rem;
  width: 560px;
  height: 500px;
`;


function RegisterTable() {
  let [totalMacros, setTotalMacros] = useContext(MacroNutrients);
  const [macroNutrients, setMacros] = useState([{ food: "", qntd : 1, gord: 0, prot: 0, carb: 0}])

  function defineTotalMacrosnutrients(){
    let totalG = 0
    let totalP = 0
    let totalC = 0

    macroNutrients.map(item=>{
      totalG += (item['qntd']*item['gord'])
      totalP += (item['qntd']*item['prot'])
      totalC += (item['qntd']*item['carb'])
    })

    setTotalMacros({
      totalGord: totalMacros['totalGord']+totalG,
      totalProt: totalMacros['totalProt']+totalP,
      totalCarb: totalMacros['totalCarb']+totalC,
    })   
  }
   
    let handleChange = (i, e) => {
      const { name, value } = e.target;
      const list = [...macroNutrients];
      list[i][name] = value;
      console.table(list)
      setMacros(list);
     }

     const handleRemoveClick = index => {
      const list = [...macroNutrients];
      list.splice(index, 1);
      setMacros(list);
    };
  return (
    <>
        <TableContainer>
          <InputRegisterMacros/>
        </TableContainer>
    </>
  );
}

export default RegisterTable