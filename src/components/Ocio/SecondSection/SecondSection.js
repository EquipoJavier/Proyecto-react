import "./SecondSection.scss";
import { useEffect, useState } from "react";

const url = "http://localhost:3001/parks";

export default function SecondSection() {
  const [parks, setPark] = useState([]);
  const[type,setType]=useState("atracciones");
   


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setPark(result);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, []);

  return (
    <>
      <section className="second__section" id="second__section">
        <div className="park-part">
          {parks.map((park) => { 
              if(type==park.type){
            return (
              <>
                <h2 style={{transition:"all 1s"}}>{park.name}</h2>
                <p style={{transition:"all 1s"}}>{park.text1}</p>
                <p style={{transition:"all 1s"}}>{park.text2}</p>
              </>
            );
}})}

          <ul className="park-part--icons">
            {parks.map((park) => {
              return (
                <li style={
                    park.type==type ? { webkitBackgroundClip:"text", backgroundClip: "text",webkitTextFillColor: "transparent",
                        backgroundColor: "black", transition:"all 1s", transform: "scale(0.8)" } : {}
                } onClick={(event)=> {
                    setType(park.type);
                    
                    }}>
                  <img style={{cursor:"pointer"}} src={park.icon} alt=""></img>
                  <br />
                  {park.name}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
