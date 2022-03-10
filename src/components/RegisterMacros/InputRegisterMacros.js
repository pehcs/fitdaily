import { MacroNutrients } from "../../providers/macroNutrients";
import { useContext, useState } from "react";
import { Input } from "../../styles";
import styled from "styled-components";
import Button from '../Button'
const ContainerInputs = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
`;
const Meals = styled.ul`
    display: flex;
    flex-wrap: wrap;
    & li{
        margin-right: 30px;
    }
`


export default function InputRegisterMacros() {
  let [totalMacros, setTotalMacros] = useContext(MacroNutrients);
  const [macroNutrients, setMacros] = useState([
    { food: "", qntd: 1, gord: 0, prot: 0, carb: 0 },
  ]);

  function registerMeal(e){
    e.preventDefault()
    const { food, qntd, gord, prot, carb} = e.target
    setMacros(currentMacros => [...currentMacros, {food: food.value, qntd: qntd.value, gord: gord.value, prot: prot.value, carb: carb.value}])
  }
  return (
    <>
      <ContainerInputs onSubmit={e=> registerMeal(e)}>
        <InputMeal name="food">Alimento</InputMeal>
        <InputMeal name="qntd" type="number" length>
          Qntd
        </InputMeal>

        <InputMeal name="prot" type="number" length>
          Prot
        </InputMeal>
        <InputMeal name="carb" type="number" length>
          Carb
        </InputMeal>
        <InputMeal name="gord" type="number" length>
          Gord
        </InputMeal>
        <Button type="submit">Registrar</Button>
      </ContainerInputs>
      <Meals>
          { macroNutrients.map((element,index)=>{
              if(index===0){
                  return
              }
              return <li key={index}>
                  <span>Alimento: {element.food}</span>
                  <span>Quantidade: {element.qntd}</span>
                  <span>Proteínas: {element.prot}</span>
                  <span>Carboidratos: {element.carb}</span>
                  <span>Gorduras: {element.gord}</span>
              </li>
          })}
      </Meals>
    </>
  );
}
const ContainerInputMeal = styled.div`
  & {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & input {
    border: 1px solid lightgrey;
    border-radius: 5px;
    outline: none;
    padding: 15px 20px;
    font-size: 16px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;
  }

  & input:focus {
    border: 2px solid #3951b2;
  }

  & input::placeholder {
    color: transparent;
  }
  & label {
    pointer-events: none;
    position: absolute;
    top: calc(50% - 12px);
    left: 15px;
    font-size: 14px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    background-color: transparent;
    padding: 5px;
    box-sizing: border-box;
  }

 
  & input:focus + label,
  & input:not(:placeholder-shown) + label {
    font-size: 13px;
    top: -12px;
    background-color: white;
  }
`;
function InputMeal({ ...props }) {
  return (
    <ContainerInputMeal>
      <Input
        placeholder=" "
        mg={props.mg}
        type={props.type}
        length={props.length}
        name={props.name}
      ></Input>
      <label for="name">{props.children}</label>
    </ContainerInputMeal>
  );
}
