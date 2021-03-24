import './App.css'
import React, {useState, useEffect} from 'react';
import Searchbar from 'material-ui-search-bar';


const App = () => {


  const [data, setData] = useState([]);
  
  useEffect(() => {
  

    fetch("./api/clients?search{}")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setData(null))
     // .finally(() => setIsLoading(true));
  }, []);

  console.log(data);

  return (
    <div className="App">
    <h1>Veterinarian admin</h1>
    <input></input>
    {/*}
    <Searchbar 
    value={this.state.value}
    onChange={(newValue) => this.setState ({ value: NewValue })}
    onRequestSearch={ () => doSomethingWith(this.state.value)}
    />
  */}

  
    
    </div>
  )
}

export default App
