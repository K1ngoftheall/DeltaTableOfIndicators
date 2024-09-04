import React, { useState, useEffect } from "react";
import Header from "./Header";
import items from "./data/data.json";
import TableSettings from "./TableSettings";
import classes from "./App.module.css";

function App() {
  const [cards, setCards] = useState([]);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    setLoaded(false);
    setCards(items);
    setLoaded(true);
  }, []);  



  return (
    <div className={classes.app}>
      <Header />
      <TableSettings cards={cards} loaded={loaded}/>
    </div>
  );
}

export default App;
