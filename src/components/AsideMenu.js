import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDrumstickBite,
  faTint,
  faDumbbell,
  faInfoCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import HomePage from "../pages/Home/HomePage";
import MealPage from "../pages/Meal/MealPage";
import WaterPage from "../pages/Water/WaterPage";
import { InfoMacroNutrients } from "../providers/macroNutrients";
import { Water } from "../providers/water";


const ContainerScreen = styled.main`
  margin-left: 17rem;
  padding: 10px;
`

const Aside = styled.aside`
  width: 17rem;
  height: 100vh;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 5rem;

  .iconStyled {
    padding: .5rem;
  }

  li a {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-direction: row;
    justify-content: flex-start;
  }
`;
const ListNavigation = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2.3rem;
  width: 70%;
`;
const AsideMenuOption = styled.button`
  background: none;
  border: none;
  margin-left: ${(props) => props.mgl && props.mgl};
  font-weight: ${(props) => (props.bold ? "bold" : "regular")};
  cursor: pointer;
`;
const TitleMenuOption = styled.h1`
  font-size: 2.5rem;
`;

const icon = {
  home: (
    <FontAwesomeIcon className="iconStyled" icon={faHome}></FontAwesomeIcon>
  ),
  meat: (
    <FontAwesomeIcon
      className="iconStyled"
      icon={faDrumstickBite}
    ></FontAwesomeIcon>
  ),
  water: (
    <FontAwesomeIcon className="iconStyled" icon={faTint}></FontAwesomeIcon>
  ),
  workout: (
    <FontAwesomeIcon className="iconStyled" icon={faDumbbell}></FontAwesomeIcon>
  ),
  motivation: (
    <FontAwesomeIcon className="iconStyled" icon={faUser}></FontAwesomeIcon>
  ),
  help: (
    <FontAwesomeIcon
      className="iconStyled"
      icon={faInfoCircle}
    ></FontAwesomeIcon>
  ),
};

const MenuOption = styled(Link)`
  font-weight: ${(props) => props.active === props.to && "bolder"};
  fontsize: 16px;
  &:link {
    text-decoration: inherit;
    color: inherit;
  }

  &:visited {
    text-decoration: inherit;
    color: inherit;
  }
`;

function AsideMenu() {
  const [select, setSelect] = useState("/meal");

  return (
    <>
      <Router>
        <Aside>
          <ListNavigation>
          <TitleMenuOption>FitDaily</TitleMenuOption>
            <li>
              <MenuOption
                onClick={() => {
                  setSelect("/");
                }}
                active={select}
                style={{ fontSize: "16px" }}
                to="/"
              >
                {icon.home}
                Home
              </MenuOption>
            </li>
            <li>
              <MenuOption
                onClick={() => {
                  setSelect("/meal");
                }}
                active={select}
                style={{ fontSize: "16px" }}
                to="/meal"
              >
                {icon.meat}
                Refeições
              </MenuOption>
            </li>
            <li>
              <MenuOption
                onClick={() => {
                  setSelect("/drinkwater");
                }}
                active={select}
                style={{ fontSize: "16px" }}
                to="/drinkwater"
              >
                {icon.water}
                Beba água
              </MenuOption>
            </li>
            <li>
              <MenuOption
                onClick={() => {
                  setSelect("#");
                }}
                active={select}
                style={{ fontSize: "16px" }}
                to="#"
              >
                {icon.workout}
                Exercícios
              </MenuOption>
            </li>
            <li>
              <MenuOption
                onClick={() => {
                  setSelect("#");
                }}
                active={select}
                style={{ fontSize: "16px" }}
                to="#"
              >
                {icon.motivation}
                Objetivos
              </MenuOption>
            </li>
            <li>
              <MenuOption
                onClick={() => {
                  setSelect("#");
                }}
                active={select}
                style={{ fontSize: "16px" }}
                to="#"
              >
                {icon.help}
                Ajuda
              </MenuOption>
            </li>
          </ListNavigation>
        </Aside>
          <InfoMacroNutrients>
            <Water>
        <ContainerScreen>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/meal" element={<MealPage />}></Route>
              <Route path="/drinkwater" element={<WaterPage />}></Route>      
            </Routes>
        </ContainerScreen>
            </Water>
          </InfoMacroNutrients> 
      </Router>
    </>
  );
}

export default AsideMenu;
