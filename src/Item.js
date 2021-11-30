import { useParams } from "react-router-dom";
import React, { useState } from "react";
function Item(props) {
  let [color, setColor] = useState("/images/placeholder.png");//hook pentru a seta culoare la imaginea de fundal a obiectului

 
  let param = useParams();//in param este dat numele obiectului si categoria prin link dupa ce alegi un produs
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
          <div onClick={() => setColor("/images/placeholder.png")}>
            <img src="/images/placeholder.png" />
          </div>

          <div onClick={() => setColor("/images/placeholder2.png")}>
            <img src="/images/placeholder2.png" />
          </div>
          <div onClick={() => setColor("/images/placeholder3.png")}>
            <img src="/images/placeholder3.png" />
          </div>

          <div onClick={() => setColor("/images/placeholder4.png")}>
            <img src="/images/placeholder4.png" />
          </div>
          <div onClick={() => setColor("/images/placeholder5.png")}>
            <img src="/images/placeholder5.png" />
          </div>
          <div onClick={() => setColor("/images/placeholder6.png")}>
            <img src="/images/placeholder6.png" />
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
