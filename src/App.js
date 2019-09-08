import React,{ useState, useEffect } from 'react'
import './App.css'


const ResultBanner = ({result}) => {
    return (
        <>
            <div className="result">
                {result}
            </div>
        </>
    )
}


const App = () => {

    const [randNum, setRandNum] = useState(0)
    const [guesses, setGuesses] = useState(0)
    const [value,setValue] = useState("")
    const [result, setResult] = useState("")


    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(()=>{
        const x = getRandomInt(0,10)
        setRandNum(x)
        console.log(x)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setGuesses(guesses + 1)
        if(value > randNum) {
            setResult("guess a lesser value")  
        } else if(value < randNum) {
            setResult("guess a greater value")
        } else {
            setResult(`correct! the number of guesses you have taken is ${guesses}`)
        }
    }

    return(
        <div className="app">    
            <div className="heading"> Number Guesser </div>
            <ResultBanner result={result}/>
            <br/>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} className="input" placeholder=" value between 0 and 10"  onChange={(e)=>setValue(e.target.value)}/>
                
            </form>
            <br/>
        </div> 
    )
}

export default App