import {useMealsListContext} from "./MealsProvider";

const MealsList = () => {
    const {meals} = useMealsListContext();
    return (
        <>
            <h1>Meals using Context Api</h1>
            {meals.map((meal, index) => (<h2 key={index}>{meal}</h2>))}
        < />
    )

}

export default MealsList
