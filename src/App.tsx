import './App.css';
import Records from './data.json';
import SearchBar from './Components/AutoComplete'

function App() {
  return (
    <div className="App">
     <SearchBar placeholder="Enter a Capital Name..." data={Records} />
    </div>
  );
}

export default App;
