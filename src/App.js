import { useState } from "react";

function App(){
  //State {état, donnée}
  const [fruits, setFruits] = useState([
    {id: 1, nom: "Pomme"},
    {id: 2, nom: "Fraise"},
    {id: 3, nom: "Framboise"},
    {id: 4, nom: "Cerise"},
    {id: 5, nom: "Poire"},
    {id: 6, nom: "Abricot"},
    {id: 7, nom: "Pêche"},
    {id: 8, nom: "Orange"},
  ]);

  //comportements
  const deleteElement = (id) => {
    alert(id);
    //1. copie tableau
    const fruitCopy = fruits.slice();

    //2. Modifie tableau
    const fruitCopyUpdated = fruitCopy.filter(fruit => fruit.id !== id);

    //3 Actualise le tableau
    setFruits(fruitCopyUpdated);
  };

  //affichage
  return  (
      <div>
        <h1>Listes de fruits</h1>
        <ul>
          {fruits.map((fruit) => {
            return (
                <li key={fruit.id}>
                  {fruit.nom} <button onClick={() => deleteElement(fruit.id)}>Supprimer</button>
                </li>
          )})}
        </ul>
      </div>
  )}

export default App;
