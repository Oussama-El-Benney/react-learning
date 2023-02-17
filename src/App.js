import './App.css';
import Btn from "./Btn";
import Header from "./Header";
import Meals from "./meals/Meals";
import Calculator from "./calculator/calculator";


function App(props) {
    return (
        <>

            <Header/>
            <Btn/>
            <Meals/>
            <Calculator/>
        </>
    );

}

export default App;
