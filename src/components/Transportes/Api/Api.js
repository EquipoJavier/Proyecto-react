import React, { useState, useEffect } from "react";

export default function Api() {
  const [items, setItems] = useState([]);
  const [done, setDone] = useState(false);


  useEffect(() => {
    const randomNumber = Math.round(Math.random()*10);
    fetch(`https://jsonplaceholder.typicode.com/users/${randomNumber}`)
      .then((result) => result.json())
      .then((items) => {
        setItems([items]);
        setDone(true);
      })}, []);

  return (
    <div>{ done ? <ul>
      {items.map(function (item) {
        return (
          <li key={item.id}>
            <p>{item.id}</p>
            <p>Su nombre es {item.name}</p>
          </li>
        );
      })}
    </ul>
   : <p>Cargando resultados...</p>}</div>
  );
}
