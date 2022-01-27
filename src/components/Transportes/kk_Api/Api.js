import React, { useState, useEffect } from "react";

export default function kk_Api() {
  const [items, setItems] = useState([]);
  const [done, setDone] = useState(false);


  useEffect(() => {
    fetch("http://localhost:3001/transportes")
      .then((result) => result.json())
      .then((items) => {
        setItems(items);
        setDone(true);
      })}, []);

  return (
    <div>{ done ? <ul>
      {items.map(function (item) {
        return (
          item.first.map(function (it) {
            return (
              <li key={it.id}>
                <p><b>{it.name}</b></p>
                <p>{it.text}</p>
              </li>
            );
          })
        );
      })}
    </ul>
   : <p>Cargando resultados...</p>}</div>
  );
}
