import './App.css';
import React from "react";

function CurrentDate(){
    return <h2>{new Date().toLocaleDateString()}</h2>
}

function RandomValue(props){
    let currentValue = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    return <h2>{currentValue}</h2>
}

function Quote(props){
    return(
        <>
        <h2>{props.text}</h2>
            <h2>{props.author}</h2>
        </>
    )
}

function CurrentTime(){
    return <h2>{new Date().toLocaleTimeString()}</h2>
}
const handlerClick = () => alert("asdasdasd");

class QuoteZuckerberg extends React.Component{
    render() {
        return(
            <>
            <h2>{this.props.text1}</h2>
                <h2>{this.props.au}</h2>
            </>
        )
    }
}

export default class App extends React.Component{

    render(){

        let qText = 'Подлинное предназначение человека двадцатого века — жить тревожно.';
        let qAuthor = 'Норман Мейлер';

        let start = 1;
        let end = 5;

        let text2 = '«Двигайтесь быстро и разрушайте препятствия. Если вы ничего не разрушаете, вы движетесь недостаточно быстро»';
        let au = 'Mark Zuckerberg';


        return (
            <div className="App">
                <CurrentDate/>
                <CurrentTime/>
                <p>Задание 1</p>
                <Quote text={qText} author={qAuthor}/>
                <RandomValue min={start} max={end}/>
                <QuoteZuckerberg text1={text2} au={au}/>
                <button onClick={handlerClick}>Click me!</button>
            </div>
        );
    }


}
