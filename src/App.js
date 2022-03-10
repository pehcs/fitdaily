import AsideMenu from './components/AsideMenu'
import HomePage from './pages/Home/HomePage'
import MealPage from './pages/Meal/MealPage'

import "./index.css"
import styled from 'styled-components'


const Main = styled.main`
  display: flex;
`
function App() {

  // const [macroNutrients, setMacros] = useContext(MacroNutrients)
  
  return (
    <Main>
        <AsideMenu></AsideMenu>
    </Main>
  );
}

export default App;
