import { Details } from './components/Details'
import { List } from './components/List'
import { ListItem } from './components/ListItem'
import { WidgetAPI } from './api/WidgetAPI'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const api = new WidgetAPI('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/');

  const [names, setNames] = useState([]);
  const [details, setDetails] = useState();

  const getNames = () => {
    const callback = (error, response) => {
      if (error) {
          console.log(error);
          return;
      }
      const newData = [...response];
      setNames(newData);
    };
    api.load(callback);
  };

  useEffect(getNames, []);

  const detailWindow = (e) => {
    const info = {
      id: e.target.id,
      name: e.target.innerText
    }
    setDetails(info)
  }

  return (
    <div className="container">
      <List>
        {names.map((item) => <ListItem key={item.id} item={item} fnc={detailWindow}></ListItem>)}
      </List>
      {details ? <Details props={details} api={api}></Details> : null}
    </div>
  )
}

export default App
