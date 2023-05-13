import React,{useState} from "react";
import "../styles/App.css"
const App = () => {
    const [input, setInput] = useState("");
const clear = () =>{
    setInput("");
}
const equal = () =>{
    
    try{
        setInput(eval(input));
    }catch{
        setInput("Invalid input")
        setTimeout(()=>{setInput("")},1000)
    }
}
const display = (event) =>{
    // console.log(input);
    const value = event.target.innerHTML;
    if((input[input.length-1] ==='+' || input[input.length-1] ==='-' ||input[input.length-1] ==='/' ||input[input.length-1] ==='*') && (value=== '+' ||value=== '-' ||value=== '/' ||value=== '*')){
        setInput(input.slice(0,input.length-1) + value);
    }else{
        setInput(input + value);
    }
    
}
    return (
        <div>
            <input type="text" id ="input" value={input} readOnly></input>
            <div className="key">
                <button onClick={clear}>C</button>
                <button onClick={display}>/</button>
                <button onClick={display}>*</button>
                <button onClick={display}>-</button>
                <button onClick={display}>7</button>
                <button onClick={display}>8</button>
                <button onClick={display}>9</button>
                <button onClick={display} id="plus">+</button>
                <button onClick={display}>4</button>
                <button onClick={display}>5</button>
                <button onClick={display}>6</button>
                <button onClick={display}>1</button>
                <button onClick={display}>2</button>
                <button onClick={display}>3</button>
                <button onClick={equal} id="equal">=</button>
                <button onClick={display}>0</button>
                <button onClick={display}>.</button>
                <button></button>
            </div>

        </div>
    )
}
export default App;