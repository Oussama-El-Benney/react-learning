import React from "react";
import MealsProvider from "./MealsProvider";
import MealsList from "./MealsList";
import Counter from "./Counter";

function Meals() {
    return (
        <>
            <MealsProvider>
                <MealsList/>
                <Counter/>
            </MealsProvider>
        </>
    )
}

export default Meals
