import { createContext, useState } from 'react'

export const MacroNutrients = createContext();

export function InfoMacroNutrients({children}){
    const [totalMacros, setTotalMacros] = useState({ totalGord: 0, totalProt: 0, totalCarb: 0})
    const [macros, setMacros] = useState([{ food: "", qntd: 1, gord: 0, prot: 0, carb: 0 }])
    return (
      <MacroNutrients.Provider value={[totalMacros]}>
        {children}
      </MacroNutrients.Provider>
    )
  }

