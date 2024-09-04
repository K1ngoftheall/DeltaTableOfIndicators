import React from "react";
import Card from "./Card";

import classes from "./TableSettings.module.css";

function TableSettings({ cards, loaded }) {
  return (
    <ul className={classes.TableSettings}>
      {loaded ? (
        cards?.map((card) => (
          <Card key={card.id} card={card} />
        ))
      ) : (
        <div>loading...</div>
      )}
    </ul>
  );
}

export default TableSettings;
