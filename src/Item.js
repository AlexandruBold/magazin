import placeholder from "./images/placeholder.png";
import placeholder2 from "./images/placeholder2.png";
import placeholder3 from "./images/placeholder3.png";
import placeholder4 from "./images/placeholder4.png";
import placeholder5 from "./images/placeholder5.png";
import placeholder6 from "./images/placeholder6.png";

import { useParams } from "react-router-dom";

import React, { useState } from "react";
function Item(props) {
  let [color, setColor] = useState(placeholder); //hook pentru a seta culoare la imaginea de fundal a obiectului

  let param = useParams(); //in param este dat numele obiectului si categoria prin link dupa ce alegi un produs
  let getItems = props.items.filter(
    (items) => items.categorie == param.categorie
  );

  let getItem = getItems[0].iteme.filter((item) => item.nume == param.nume);

  //prin props sunt date obiectele din App apoi filtrate dupa categorie si nume
  return (
    <div className="item-showcase">
      <div className="item">
        <img src={color} />
        <div className="colors">
          <div onClick={() => setColor(placeholder)}>
            <img src={placeholder} />
          </div>

          <div onClick={() => setColor(placeholder2)}>
            <img src={placeholder2} />
          </div>
          <div onClick={() => setColor(placeholder3)}>
            <img src={placeholder3} />
          </div>

          <div onClick={() => setColor(placeholder4)}>
            <img src={placeholder4} />
          </div>
          <div onClick={() => setColor(placeholder5)}>
            <img src={placeholder5} />
          </div>
          <div onClick={() => setColor(placeholder6)}>
            <img src={placeholder6} />
          </div>
        </div>
        <div>{getItem[0].nume}</div>
        <div>{getItem[0].pret}</div>
        <button
          className="adauga-btn"
          onClick={(e) => {
            props.add(getItem[0].nume);

            e.preventDefault();

            alert("item adaugat");
          }}
        >
          Adauga in cos
        </button>
      </div>
    </div>
  );
}
export default Item;
