import logo from './logo.svg';
import './App.css';
const singers = [
  { name: 'Tahsan', Job: 'singer' },
  { name: 'Minar Ahmed', Job: 'singer' },
  { name: 'James', Job: 'singer' },
  { name: 'Arnob', Job: 'singer' }
]

function App() {
  const nayoks = ['Shakib Khan', 'Siam Ahmed', 'Afran Nisho', 'Maruf Ahmed', 'Salman Shah', 'Riyaz', 'Jovan Ahmed']
  return (
    <div className="App">
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika='Purnima'></Person>
      <Person name={nayoks[1]} nayika="Puja Cerrey"></Person>
      <Person name={nayoks[2]} nayika="Mehjabin"></Person> */}
      <h3 className='newCopo'>New Component</h3>
      <p>Here is my friend name.</p>
      <Friend name='Junayed Al Hadi' job="Student"></Friend>
      <Friend name='Nayeem' job="Student"></Friend>
      <Friend name='Ashik' job="Student"></Friend>
    </div >
  );
}
function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <h4> {props.nayika}</h4>
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
