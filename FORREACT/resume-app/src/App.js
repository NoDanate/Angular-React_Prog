import './App.css';
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import React, {useState} from "react"


/*class Button extends React.Component{
    render() {
        const btnClick  = () => {
            this.props.onClickAct(this.props.bText);
        };
        return <button className="Button" onClick={btnClick}>
            + {this.props.bText}
        </button>
    }
}

class Display extends React.Component{
    render() {
        return <div className="Display"> {this.props.displayText} </div>
    }
}*/

/*export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            currentValue: 0
        }
    }
    render(){
        const incButtonValue = 1;
        const handlerClick = incValue => {
            this.setState({currentValue: this.state.currentValue + incValue})
        }
        return(
            <>
                <Button bText={incButtonValue}
                onClickAct={handlerClick}/>
                <Display displayText={this.state.currentValue}/>
            </>
        )
    }
}*/

/*App.defaultProps = {
    name:"Josh",
    lastName:"Washington"
}*/


function Button(props){
    const handlerClick = () => {
        props.onClickAct(props.bColor)
    }

    return  <button onClick={handlerClick} style={{backgroundColor: props.bColor}}>
            {props.text}
            </button>

}

function DisplayBlock(props){
    return(
        <div className="DisplayBlock" style={{backgroundColor: props.bColor}}>
            Oh me Oh my
        </div>
    )
}

export default function App(){
    const[displayBColor, setDisplayBColor] = useState("white");

    const stateFunc = (newBColor) => {
        setDisplayBColor(newBColor);
    };
    return (
        <>
            <Button bColor="red" text="red"
            onClickAct={stateFunc}/>
            <Button bColor="yellow" text="yellow"
                    onClickAct={stateFunc}/>
            <Button bColor="green" text="green"
                    onClickAct={stateFunc}/>
            <DisplayBlock bColor={displayBColor}/>
        </>
    )
}
