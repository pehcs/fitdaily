import styled from "styled-components";
import { useContext } from "react";
import { MacroNutrients } from "../providers/macroNutrients";

const ContainerBars = styled.div`
  display: flex;
  flex-direction: column;
`;
const Bar = styled.div`
  border-radius: 55px;
  border: 3px solid black;
  width: 350px;
  height: 40px;
  overflow: hidden;

  margin: 5px;
`;
const MacroDaily = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  background-color: #${props=>props.BgColor && props.BgColor};
  border-radius: 0 120px 120px 0;
  width: ${(props) => (props.fillBar ? props.fillBar + "%" : "0px")};
  transition: all 1s;
`;
const MacroData = styled.span`
  position: absolute;
  transform: translate(
    ${(props) => (props.position === "left" ? "30px" : "250px")},
    9px
  );

  font-weight: bold;
`;

function MacroBar(props) {
  const [totalMacros] = useContext(MacroNutrients);

  const { totalCarb, totalProt, totalGord } = totalMacros;

  return (
    <>
      <ContainerBars>
        <Bar>
          <MacroData position="left">Proteínas</MacroData>
          <MacroData position="right">{`${totalProt}/160g`}</MacroData>
          <MacroDaily BgColor="DEB887" fillBar={(totalProt * 100) / 160}></MacroDaily>
        </Bar>
        <Bar>
          <MacroData position="left">
            Carboidratos
          </MacroData>
          <MacroData position="right">{`${totalCarb}/160g`}</MacroData>
          <MacroDaily BgColor="ADD8E6" fillBar={(totalCarb * 100) / 160}></MacroDaily>
        </Bar>
        <Bar>
          <MacroData position="left">Gorduras</MacroData>
          <MacroData position="right">{`${totalGord}/160g`}</MacroData>
          <MacroDaily BgColor="FDFD96" fillBar={(totalGord * 100) / 160}></MacroDaily>
        </Bar>
      </ContainerBars>
    </>
  );
}

export default MacroBar;
