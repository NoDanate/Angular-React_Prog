import React from 'react';

export default class NewForm extends React.Component{
    state ={
        nameState: "",
        lastNameState: ""
    };

    render() {
        //const [nameState, setNameState] = useState("");
        const handlerSubmit = event => {
            event.preventDefault();
            alert(this.state.nameState + " " + this.state.lastNameState);
        };

        const handlerNameChange = event => {
            let name = event.target.value;
            if(name.trim().toUpperCase() === "TEST"){
                alert("Wrong!!!!!!");
                this.setState({nameState: ""});
            }
            else{
                this.setState({nameState: event.target.value})
            }
        };

        const handlerLastNameChange = event => {
            this.setState({lastNameState: event.target.value});
        };

        return(
            <form onSubmit={handlerSubmit}>
                <input type="text" placeholder="input name" value={this.state.nameState} onChange={handlerNameChange}/>
                <input type="text" placeholder="input LastName" value={this.state.lastNameState} onChange={handlerLastNameChange}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}