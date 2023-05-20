import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

// Components

const App = () => {
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonster] = useState([]);
  const [filteredMonstres, setFilteredMonstres] = useState(monsters);

  //======== Fetching monsters array ==========

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonster(users));
  }, []);

  //========================================

  useEffect(() => {
    const newFilteredMonstres = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonstres(newFilteredMonstres);
  }, [monsters, searchField]);

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      <div className="search-container">
        Search Monsters:
        <SearchBox
          className="monster-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monster..."
        />
      </div>

      <CardList monsters={filteredMonstres} />
    </div>
  );
};

export default App;
