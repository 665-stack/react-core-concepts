import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika='moushumi'></Person>
      <Person name='bappaRaz' nayika="cheka"></Person>
      <Person name='kuber maji' nayika="kopila"></Person>
      <h3 className='newCopo'>New Component</h3>
      <p>Here is my friend name.</p>
      <Friend name='Junayed Al Hadi' job="Student"></Friend>
      <Friend name='Nayeem' job="Student"></Friend>
      <Friend name='Ashik' job="Student"></Friend>
    </div>
  );
}
function Person(props) {
  return (
    <div className='person'>
      <h2>{props.name}</h2>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}
const Friend = (props) => {
  return (
    <div className='friend'>
      <h2>{props.name}</h2>
      <p>Job: {props.job}</p>
    </div>
  )
}
export default App;
