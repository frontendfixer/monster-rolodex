import './App.scss';

import { ChangeEvent, useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils.ts' ;

export type Monster={
  id:number;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonster] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //= ======= Fetching monsters array ==========

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((users) => setMonster(users));

    const fetchMonsters = async()=>{
      const monsters = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonster(monsters);
    }
    fetchMonsters();
  }, []);

  //= =======================================

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) : void=> {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      <div className="search-container">
        <p>Search Monsters</p>
        <SearchBox
          className="monster-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monster..."
        />
      </div>

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
