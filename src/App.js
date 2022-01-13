// import logo from './logo.svg';
// import './App.css';

import PersonCard from "./components/PersonComponent";

function App() {
  return (
    <div className="App">
      <PersonCard firstName = {"Steve"} lastName = {"Wozniak"} age={60} hairColor={"Brown"}></PersonCard>
      <PersonCard firstName = {"Steve"} lastName = {"Jobs"} age={"no"} hairColor={"Grey"}></PersonCard>
      <PersonCard firstName = {"Bill"} lastName = {"Murray"} age={70} hairColor={"Brown"}></PersonCard>
      <PersonCard firstName = {"Bill"} lastName = {"Burr"} age={50} hairColor={"Brown"}></PersonCard>
    </div>
  );
}

export default App;
