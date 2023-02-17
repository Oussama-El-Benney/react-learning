import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Maarouna", "Lablebi", "botato", "tomtao"]

const MealsProvider = ({children}) => {
    const [meals,setMealsList] = React.useState(todaysMeals)

    return(
        <MealsContext.Provider value={{meals}} >
            {children}
            </MealsContext.Provider >
    )
}

export const useMealsListContext = () =>React.useContext(MealsContext);
export default  MealsProvider
