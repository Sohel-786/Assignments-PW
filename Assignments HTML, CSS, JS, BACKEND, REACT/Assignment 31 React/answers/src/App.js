import Person from "./components/Person";
import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div>
      <Person  name={"Sohel Shaikh"} age={23} />

      <Button  text={"Click Me"} onClick={()=>{ console.log('Thanks for clicking me');}}/>

      <Header title={'"PW Skills" and all our Mentors are Amazing'} />

      <List  items={['Harry Potter', 'Hobbit', 'Alpha', 'RoundUp']}/>

    </div>
  );
}

export default App;
