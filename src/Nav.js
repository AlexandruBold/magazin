import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Item from "./Item";

function Nav(props) {
  let navigate = useNavigate();//hook folosit pentru redirectionare dupa ce apesi enter 
  let [text, setText] = useState("");//hook pentru text-ul din bara de search
  let [c, setC] = useState("Accesorii");//hook pentru a seta categoria din care fac parte obiectele

  const navItems = props.items.map((item) => (
    <div key={item.categorie}>
      <Link to={`${item.categorie}`}>{item.categorie}</Link>
    </div>
  ));

  useEffect(() => {
    if (text.toLocaleLowerCase().includes("in")) setC("Incaltaminte");

    if (text.toLocaleLowerCase().includes("ac")) setC("Accesorii");
    if (text.toLocaleLowerCase().includes("im")) setC("Imbracaminte");
  });

  let searchBarItems = props.items.filter((items) => items.categorie == c);
  let [searchBarItemsFiltered] = searchBarItems;
  let iteme = searchBarItemsFiltered.iteme.map((item) => item);
  let option = iteme.map((w) => <option key={w.nume}>{w.nume}</option>);
//itemele sunt filtrate in functie de ca scrii in search-bar apoi bagate intr-un datalist 

  let numeleItemelor = iteme.map((item) => item.nume);//variabila asta este folosita mai jos pentru filtrare, daca ce scrii in search 
  //se afla in lista obiectelor te redirectioneaza prin navigate catre link-ul obiectului ,daca nu ,catre notFound


  return (
    <div className="nav-bar">
      <div>
        <Link to="/">Home</Link>
      </div>
      {navItems}

      <div className="search-bar">
        <datalist id="suggestions">{option}</datalist>
        <input
          placeholder="Cauta..."
          autoComplete="on"
          list="suggestions"
          onChange={(e) => setText(e.target.value)}
          onKeyUp={(e) => {
            
            if (e.keyCode == 13 && text != "") {
              if (numeleItemelor.some((item) => item == text)) {
                navigate(`${c}/${text}`);
              } else navigate("/notFound");
            }
          }}
        />
      </div>
      <div className="shopping-list">
        <Link to="/ShoppingList">
          <p>🛒</p>
        </Link>
      </div>
    </div>
  );
}
export default Nav;
