import "./App.css";
import image3 from "./images/image3.jpg";
import NotFound from "./notFound";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Items from "./Items";
import Item from "./Item";
import ShoppingList from "./ShoppingList";
function App() {
  function Home() {
    let [img, setImg] = useState(image3); //hook pt imaginea din home

    return (
      <div className="home-page">
        <div>
          <center>
            <div className="images">
              <img src={img} alt="images" />
            </div>
          </center>
          <center>
            <div className="btns">
              <button
                onClick={() =>
                  setImg(
                    "https://github.com/AlexandruBold/magazin/blob/gh-pages/images/image1.jpg"
                  )
                }
              ></button>
              <button onClick={() => setImg("/images/image2.jpg")}></button>
              <button onClick={() => setImg(image3)}></button>
            </div>
          </center>
        </div>
      </div>
    );
  }

  let itemeCumparate = []; //lista de iteme adaugate in cos
  function add(item) {
    itemeCumparate.push(item);
  } //functie data prin props (mai jos) pentru a adauga obiectele in cos

  class Objects {
    constructor(
      nume,
      id,
      gen,
      tip,
      marime,
      pret,
      imagine = "/images/placeholder.png" //imagine default pentru toate
    ) {
      this.nume = nume;
      this.id = id;
      this.gen = gen;
      this.tip = tip;
      this.pret = pret;
      this.marime = marime;
      this.imagine = imagine;
    }
  }

  let Incaltaminte1 = new Objects("Incaltaminte1", 1, "M", "Casual", 41, 74);
  let Incaltaminte2 = new Objects("Incaltaminte2", 2, "M", "Casual", 41, 74);
  let Incaltaminte3 = new Objects("Incaltaminte3", 3, "M", "Casual", 41, 90);
  let Incaltaminte4 = new Objects("Incaltaminte4", 4, "M", "Casual", 41, 90);
  let Incaltaminte5 = new Objects("Incaltaminte5", 5, "M", "Casual", 42, 110);
  let Incaltaminte6 = new Objects("Incaltaminte6", 6, "M", "Sport", 41, 130);
  let Incaltaminte7 = new Objects("Incaltaminte7", 7, "M", "Sport", 41, 145);
  let Incaltaminte8 = new Objects("Incaltaminte8", 8, "M", "Sport", 42, 225);
  let Incaltaminte9 = new Objects("Incaltaminte9", 9, "M", "Sport", 43, 300);
  let Incaltaminte10 = new Objects("Incaltaminte10", 10, "M", "Sport", 43, 324);
  let Incaltaminte11 = new Objects(
    "Incaltaminte11",
    11,
    "M",
    "Elegant",
    42,
    300
  );
  let Incaltaminte12 = new Objects(
    "Incaltaminte12",
    12,
    "M",
    "Elegant",
    43,
    300
  );
  let Incaltaminte13 = new Objects(
    "Incaltaminte13",
    13,
    "M",
    "Elegant",
    41,
    350
  );
  let Incaltaminte14 = new Objects(
    "Incaltaminte14",
    14,
    "M",
    "Elegant",
    41,
    400
  );

  let Incaltaminte15 = new Objects("Incaltaminte15", 15, "F", "Casual", 37, 74);
  let Incaltaminte16 = new Objects(
    "Incaltaminte16",
    16,
    "F",
    "Casual",
    37,
    200
  );
  let Incaltaminte17 = new Objects(
    "Incaltaminte17",
    17,
    "F",
    "Casual",
    38,
    190
  );
  let Incaltaminte18 = new Objects(
    "Incaltaminte18",
    18,
    "F",
    "Casual",
    41,
    180
  );
  let Incaltaminte19 = new Objects(
    "Incaltaminte19",
    19,
    "F",
    "Casual",
    40,
    150
  );
  let Incaltaminte20 = new Objects("Incaltaminte20", 20, "F", "Sport", 38, 230);
  let Incaltaminte21 = new Objects("Incaltaminte21", 21, "F", "Sport", 41, 145);
  let Incaltaminte22 = new Objects("Incaltaminte22", 22, "F", "Sport", 39, 225);
  let Incaltaminte23 = new Objects("Incaltaminte23", 23, "F", "Sport", 39, 320);
  let Incaltaminte24 = new Objects("Incaltaminte24", 24, "F", "Sport", 40, 350);
  let Incaltaminte25 = new Objects(
    "Incaltaminte25",
    25,
    "F",
    "Elegant",
    39,
    350
  );
  let Incaltaminte26 = new Objects(
    "Incaltaminte26",
    26,
    "F",
    "Elegant",
    37,
    400
  );
  let Incaltaminte27 = new Objects(
    "Incaltaminte27",
    27,
    "F",
    "Elegant",
    39,
    350
  );
  let Incaltaminte28 = new Objects(
    "Incaltaminte28",
    28,
    "F",
    "Elegant",
    40,
    500
  );
  let Imbracaminte1 = new Objects("Imbracaminte1", 1, "M", "Casual", "M", 74);
  let Imbracaminte2 = new Objects("Imbracaminte2", 2, "M", "Casual", "M", 74);
  let Imbracaminte3 = new Objects("Imbracaminte3", 3, "M", "Casual", "M", 90);
  let Imbracaminte4 = new Objects("Imbracaminte4", 4, "M", "Casual", "M", 90);
  let Imbracaminte5 = new Objects("Imbracaminte5", 5, "M", "Casual", "M", 110);
  let Imbracaminte6 = new Objects("Imbracaminte6", 6, "M", "Sport", "M", 130);
  let Imbracaminte7 = new Objects("Imbracaminte7", 7, "M", "Sport", "M", 145);
  let Imbracaminte8 = new Objects("Imbracaminte8", 8, "M", "Sport", "M", 225);
  let Imbracaminte9 = new Objects("Imbracaminte9", 9, "M", "Sport", "M", 300);
  let Imbracaminte10 = new Objects(
    "Imbracaminte10",
    10,
    "M",
    "Sport",
    "M",
    324
  );
  let Imbracaminte11 = new Objects(
    "Imbracaminte11",
    11,
    "M",
    "Elegant",
    "M",
    300
  );
  let Imbracaminte12 = new Objects(
    "Imbracaminte12",
    12,
    "M",
    "Elegant",
    "M",
    300
  );
  let Imbracaminte13 = new Objects(
    "Imbracaminte13",
    13,
    "M",
    "Elegant",
    "M",
    350
  );
  let Imbracaminte14 = new Objects(
    "Imbracaminte14",
    14,
    "M",
    "Elegant",
    "M",
    400
  );

  let Imbracaminte15 = new Objects(
    "Imbracaminte15",
    15,
    "F",
    "Casual",
    "M",
    74
  );
  let Imbracaminte16 = new Objects(
    "Imbracaminte16",
    16,
    "F",
    "Casual",
    "M",
    200
  );
  let Imbracaminte17 = new Objects(
    "Imbracaminte17",
    17,
    "F",
    "Casual",
    "M",
    190
  );
  let Imbracaminte18 = new Objects(
    "Imbracaminte18",
    18,
    "F",
    "Casual",
    "M",
    180
  );
  let Imbracaminte19 = new Objects(
    "Imbracaminte19",
    19,
    "F",
    "Casual",
    "M",
    150
  );
  let Imbracaminte20 = new Objects(
    "Imbracaminte20",
    20,
    "F",
    "Sport",
    "M",
    230
  );
  let Imbracaminte21 = new Objects(
    "Imbracaminte21",
    21,
    "F",
    "Sport",
    "M",
    145
  );
  let Imbracaminte22 = new Objects(
    "Imbracaminte22",
    22,
    "F",
    "Sport",
    "M",
    225
  );
  let Imbracaminte23 = new Objects(
    "Imbracaminte23",
    23,
    "F",
    "Sport",
    "M",
    320
  );
  let Imbracaminte24 = new Objects("Imbracaminte24", 24, "F", "Sport", 40, 350);
  let Imbracaminte25 = new Objects(
    "Imbracaminte25",
    25,
    "F",
    "Elegant",
    "M",
    350
  );
  let Imbracaminte26 = new Objects(
    "Imbracaminte26",
    26,
    "F",
    "Elegant",
    "M",
    400
  );
  let Imbracaminte27 = new Objects(
    "Imbracaminte27",
    27,
    "F",
    "Elegant",
    "M",
    350
  );
  let Imbracaminte28 = new Objects(
    "Imbracaminte28",
    28,
    "F",
    "Elegant",
    "M",
    500
  );

  let Accesoriu1 = new Objects("Accesoriu1", 1, "M", "Casual", "-", 74);
  let Accesoriu2 = new Objects("Accesoriu2", 2, "M", "Casual", "-", 74);
  let Accesoriu3 = new Objects("Accesoriu3", 3, "M", "Casual", "-", 90);
  let Accesoriu4 = new Objects("Accesoriu4", 4, "M", "Casual", "-", 90);
  let Accesoriu5 = new Objects("Accesoriu5", 5, "M", "Casual", "-", 110);
  let Accesoriu6 = new Objects("Accesoriu6", 6, "M", "Sport", "-", 130);
  let Accesoriu7 = new Objects("Accesoriu7", 7, "M", "Sport", "-", 145);
  let Accesoriu8 = new Objects("Accesoriu8", 8, "M", "Sport", "-", 225);
  let Accesoriu9 = new Objects("Accesoriu9", 9, "M", "Sport", "-", 300);
  let Accesoriu10 = new Objects("Accesoriu10", 10, "M", "Sport", "-", 324);
  let Accesoriu11 = new Objects("Accesoriu11", 11, "M", "Elegant", "-", 300);
  let Accesoriu12 = new Objects("Accesoriu12", 12, "M", "Elegant", "-", 300);
  let Accesoriu13 = new Objects("Accesoriu13", 13, "M", "Elegant", "-", 350);
  let Accesoriu14 = new Objects("Accesoriu14", 14, "M", "Elegant", "-", 400);

  let Accesoriu15 = new Objects("Accesoriu15", 15, "F", "Casual", "-", 74);
  let Accesoriu16 = new Objects("Accesoriu16", 16, "F", "Casual", "-", 200);
  let Accesoriu17 = new Objects("Accesoriu17", 17, "F", "Casual", "-", 190);
  let Accesoriu18 = new Objects("Accesoriu18", 18, "F", "Casual", "-", 180);
  let Accesoriu19 = new Objects("Accesoriu19", 19, "F", "Casual", "-", 150);
  let Accesoriu20 = new Objects("Accesoriu20", 20, "F", "Sport", "-", 230);
  let Accesoriu21 = new Objects("Accesoriu21", 21, "F", "Sport", "-", 145);
  let Accesoriu22 = new Objects("Accesoriu22", 22, "F", "Sport", "-", 225);
  let Accesoriu23 = new Objects("Accesoriu23", 23, "F", "Sport", "-", 320);
  let Accesoriu24 = new Objects("Accesoriu24", 24, "F", "Sport", "-", 350);
  let Accesoriu25 = new Objects("Accesoriu25", 25, "F", "Elegant", "-", 350);
  let Accesoriu26 = new Objects("Accesoriu26", 26, "F", "Elegant", "-", 400);
  let Accesoriu27 = new Objects("Accesoriu27", 27, "F", "Elegant", "-", 350);
  let Accesoriu28 = new Objects("Accesoriu28", 28, "F", "Elegant", "-", 500);

  let Incaltaminte = {
    categorie: "Incaltaminte", //categoria dupa care vor fi filtrate din nav
    iteme: [
      Incaltaminte1,
      Incaltaminte2,
      Incaltaminte3,
      Incaltaminte4,
      Incaltaminte5,
      Incaltaminte6,
      Incaltaminte7,
      Incaltaminte8,
      Incaltaminte9,
      Incaltaminte10,
      Incaltaminte11,
      Incaltaminte12,
      Incaltaminte13,
      Incaltaminte14,
      Incaltaminte15,
      Incaltaminte16,
      Incaltaminte17,
      Incaltaminte18,
      Incaltaminte19,
      Incaltaminte20,
      Incaltaminte21,
      Incaltaminte22,
      Incaltaminte23,
      Incaltaminte24,
      Incaltaminte25,
      Incaltaminte26,
      Incaltaminte27,
      Incaltaminte28,
    ],
  };
  let Imbracaminte = {
    categorie: "Imbracaminte",
    iteme: [
      Imbracaminte1,
      Imbracaminte2,
      Imbracaminte3,
      Imbracaminte4,
      Imbracaminte5,
      Imbracaminte6,
      Imbracaminte7,
      Imbracaminte8,
      Imbracaminte9,
      Imbracaminte10,
      Imbracaminte11,
      Imbracaminte12,
      Imbracaminte13,
      Imbracaminte14,
      Imbracaminte15,
      Imbracaminte16,
      Imbracaminte17,
      Imbracaminte18,
      Imbracaminte19,
      Imbracaminte20,
      Imbracaminte21,
      Imbracaminte22,
      Imbracaminte23,
      Imbracaminte24,
      Imbracaminte25,
      Imbracaminte26,
      Imbracaminte27,
      Imbracaminte28,
    ],
  };
  let Accesorii = {
    categorie: "Accesorii",
    iteme: [
      Accesoriu1,
      Accesoriu2,
      Accesoriu3,
      Accesoriu4,
      Accesoriu5,
      Accesoriu6,
      Accesoriu7,
      Accesoriu8,
      Accesoriu9,
      Accesoriu10,
      Accesoriu11,
      Accesoriu12,
      Accesoriu13,
      Accesoriu14,
      Accesoriu15,
      Accesoriu16,
      Accesoriu17,
      Accesoriu18,
      Accesoriu19,
      Accesoriu20,
      Accesoriu21,
      Accesoriu22,
      Accesoriu23,
      Accesoriu24,
      Accesoriu25,
      Accesoriu26,
      Accesoriu27,
      Accesoriu28,
    ],
  };
  let items = [Accesorii, Incaltaminte, Imbracaminte];
  return (
    <div className="App">
      {<Nav items={items} />}

      <Routes>
        <Route path="/notFound" element={<NotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:categorie" element={<Items items={items} />}></Route>
        <Route
          path="/:categorie/:nume"
          element={<Item items={items} add={add} />}
        ></Route>
        <Route
          path="/shoppingList"
          element={<ShoppingList itemeCumparate={itemeCumparate} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
