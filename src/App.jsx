import { Header } from "./components/Header";
import { UserInput } from "./components/UserInput";
import { Result } from "./components/Result";
import { useState } from "react";


const initailValue = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
}

function App() {

  const [userInput, setUserInput] = useState(initailValue);

  const inputIsValid = userInput.duration >= 1 ; 

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevState => {
            return {
                ...prevState,
                [inputIdentifier]: +newValue
            };
        })
    }

  return (
    <main>
      <header id = "header"><Header/></header>
      <div >
        <UserInput inputValue = {userInput} changeHandler = {handleChange}/>
        {inputIsValid ? <Result input = {userInput}/> : <p className="center">Please enter duration greater than 0</p>}
      </div>

      
    </main>
    
  )
}

export default App
