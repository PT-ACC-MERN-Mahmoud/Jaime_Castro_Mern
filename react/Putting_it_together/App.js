import './App.css';
import PersonCard from './components/PersonCard';

const peopleArr =[
  
  {
    firstName: "Roshi",
    lastName: "Muten",
    age: 1000,
    hairColor: "Bold",
  },

  {
    firstName: "Silvers",
    lastName: "Rayleigh",
    age: 78,
    hairColor: "White",
  }

];

function App() {
  return (
    <div className="App">
      
      <PersonCard 
      firstName={peopleArr[0].firstName}
      lastName ={peopleArr[0].lastName}
      age = {peopleArr[0].age}
      hairColor = {peopleArr[0].hairColor}
      />

      <PersonCard 
      firstName={peopleArr[1].firstName}
      lastName ={peopleArr[1].lastName}
      age = {peopleArr[1].age}
      hairColor = {peopleArr[1].hairColor}
      />

    </div>
  );
}

export default App;
