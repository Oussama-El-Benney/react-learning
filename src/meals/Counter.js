import {useMealsListContext} from "./MealsProvider";

const Counter = () => {
    const {meals} = useMealsListContext();
    return (
        <>
           <h3>Number of Meals Today {meals.length}</h3>
        < />
    )

}
export default Counter
