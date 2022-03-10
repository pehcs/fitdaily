import { createContext, useState } from 'react'

export const DrinkedWater = createContext()

export function Water({children}) {

    const [drinkWater, setWater] = useState({currentWater: 0, stepWater: 0, totalWater: 0})

    return (
        <DrinkedWater.Provider value={[drinkWater, setWater]}>
            {children}
        </DrinkedWater.Provider>
    )
}

