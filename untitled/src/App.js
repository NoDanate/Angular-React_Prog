import logo from './logo.svg';
import './App.css';
import Form from "./form/form";
import NewForm from "./form2/newForm";

let writers = [
  {id: 1, name: 'Сомерсет', lastName: 'Моэм'},
  {id: 2, name: 'Герман', lastName: 'Гессе'},
  {id: 3, name: 'Олдос', lastName: 'Хаксли'},
  {id: 4, name: 'Альберт', lastName: 'Камю'},
];

function Writers(props){
  return(
      <>
      <div>
        {props.name} {props.lastName}
      </div>
      <hr/>
          </>
  )
}

function WritersList(props){
  return(
        <div className="rows">
            {props.data.map(item => <Writers key={item.id}{...item}/>)}
        </div>
  )
}

function App() {
  return (
    <>
      <WritersList data={writers}/>
        <hr/>
        <Form/>
        <NewForm/>
    </>
  );
}

export default App;
