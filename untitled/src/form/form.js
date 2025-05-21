import React from "react";

export default function Form(){
    let uRef = React.createRef()
    let uLastRef = React.createRef()
    const handleSubmit = event =>{
        event.preventDefault();
        let str = uRef.current.value + " " + uLastRef.current.value;
        /*let uName = document.getElementById("userName");*/
        alert(str);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Введите имя пользователя</label>
            <input type="text" id="userName" ref={uRef}/>
            <input type="text" id="userLaseName" ref={uLastRef}/>
            <input type="submit" value="click me" id="userButton"/>
        </form>
    )
}