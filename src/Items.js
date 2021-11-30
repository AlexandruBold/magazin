import { Link, useParams } from "react-router-dom";
import React, { useState } from "react";
function Items(props) {
  let { categorie } = useParams();
  //hooks pentru filtre(gen & pret)
  let [gen, setGen] = useState("M");
  let [price, setPrice] = useState(74);

  let itemsCategory = props.items.filter((item) => item.categorie == categorie); //filtru pentru categorie(incaltaminte,accesorii,imbracaminte)

  let filters = itemsCategory[0].iteme //obiectul ramas in  array dupa filtrarea de sus
    .filter((f) => f.gen == gen) //filtru pt gen
    .filter((f) => f.pret >= price); //filtru pt pret
  let filtered = filters.map((items) => (
    <div key={items.nume} className="item">
      <img src={items.imagine} />
      {items.pret}
      <Link to={`${items.nume}`}>{items.nume}</Link>
    </div> //itemele ramase dupa filtrare
  ));

  return (
    //pagina cu itemele impartita in filtre si items
    <div className="Display">
      <div className="filters">
        <div className="filter-btns">
          <button onClick={() => setGen("M")}>Barbati</button>
          <button onClick={() => setGen("F")}>Femei</button>
        </div>
        <br />
        <center>
          <input
            id="range"
            type="range"
            max={500}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label htmlFor="range">{price}</label>
        </center>
      </div>
      <div className="items"> {filtered}</div>
    </div>
  );
}

export default Items;
